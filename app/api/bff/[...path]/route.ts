import { NextResponse } from "next/server";
import { fieldErrorsFromMessages } from "@/lib/bff/field-errors";
import { NestError, nestFetch } from "@/lib/bff/nest";

type AllowedRoute = {
  methods: Array<"GET" | "POST">;
  test: (path: string[]) => boolean;
};

/** Public Core 3.0 routes the website is allowed to proxy. */
const PUBLIC_ENTER_FIRST: AllowedRoute[] = [
  {
    methods: ["GET"],
    test: (path) =>
      path.length === 2 && path[0] === "enter-first" && path[1] === "courses",
  },
  {
    methods: ["POST"],
    test: (path) =>
      path.length === 2 &&
      path[0] === "enter-first" &&
      path[1] === "enrollments",
  },
  {
    methods: ["GET"],
    test: (path) =>
      path.length === 5 &&
      path[0] === "enter-first" &&
      path[1] === "enrollments" &&
      path[2] === "by-reference" &&
      path[4] === "status" &&
      Boolean(path[3]),
  },
  {
    methods: ["GET", "POST"],
    test: (path) =>
      path.length === 2 &&
      path[0] === "enter-first" &&
      path[1] === "unsubscribe",
  },
];

function isAllowed(method: string, path: string[]) {
  return PUBLIC_ENTER_FIRST.some(
    (route) =>
      route.methods.includes(method as "GET" | "POST") && route.test(path),
  );
}

function visitorHeaders(request: Request, hasBody: boolean) {
  const headers = new Headers();
  if (hasBody) headers.set("Content-Type", "application/json");

  const userAgent = request.headers.get("user-agent");
  if (userAgent) headers.set("user-agent", userAgent);

  const forwarded = request.headers.get("x-forwarded-for");
  const realIp =
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip");
  if (forwarded) headers.set("x-forwarded-for", forwarded);
  else if (realIp) headers.set("x-forwarded-for", realIp);

  return headers;
}

async function proxy(request: Request, path: string[]) {
  if (!isAllowed(request.method, path)) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  try {
    const search = new URL(request.url).search;
    const hasBody = request.method !== "GET" && request.method !== "HEAD";
    const body = hasBody ? await request.text() : undefined;
    const data = await nestFetch(`/${path.join("/")}${search}`, {
      method: request.method,
      body: body || undefined,
      headers: visitorHeaders(request, Boolean(body)),
    });
    return NextResponse.json(data ?? { ok: true });
  } catch (error) {
    if (error instanceof NestError) {
      return NextResponse.json(
        {
          message: error.message,
          messages: error.messages,
          fieldErrors: fieldErrorsFromMessages(error.messages),
        },
        { status: error.status },
      );
    }
    return NextResponse.json(
      { message: "Upstream request failed" },
      { status: 502 },
    );
  }
}

export async function GET(
  request: Request,
  context: { params: Promise<{ path: string[] }> },
) {
  return proxy(request, (await context.params).path);
}

export async function POST(
  request: Request,
  context: { params: Promise<{ path: string[] }> },
) {
  return proxy(request, (await context.params).path);
}
