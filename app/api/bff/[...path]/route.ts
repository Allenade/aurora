import { NextResponse } from "next/server";
import { NestError, nestFetch } from "@/lib/bff/nest";

async function proxy(request: Request, path: string[]) {
  // Public website BFF only proxies Enter First payment APIs.
  if (path[0] !== "enter-first") {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  try {
    const search = new URL(request.url).search;
    const body =
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.text();
    const data = await nestFetch(`/${path.join("/")}${search}`, {
      method: request.method,
      body: body || undefined,
    });
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof NestError) {
      return NextResponse.json(
        { message: error.message },
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
