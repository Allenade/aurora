import type { CourseSyllabus } from "./types";

const ALLOWED_TAGS = new Set([
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "a",
  "blockquote",
  "hr",
  "span",
  "div",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "sup",
  "sub",
  "code",
  "pre",
]);

const VOID_TAGS = new Set(["br", "hr"]);

const DISCARD_CONTENT = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "svg",
  "math",
  "noscript",
  "textarea",
  "template",
  "form",
]);

const DISCARD_TAG = new Set([...DISCARD_CONTENT, "link", "meta", "base"]);

const EMPTY_SYLLABUS: CourseSyllabus = {
  url: null,
  filename: null,
  text: null,
};

/** http(s) URL only. Missing, relative, and other schemes become null. */
export function publicHttpUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 2048 || /[\u0000-\u0020]/.test(trimmed)) {
    return null;
  }
  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.username || url.password) return null;
  return url.href;
}

/**
 * Picture and syllabus from the public course payload.
 * Older responses omit both; either value may also be null.
 */
export function normalizeCourseMedia(row: Record<string, unknown>): {
  imageUrl: string | null;
  syllabus: CourseSyllabus;
} {
  return {
    imageUrl: publicHttpUrl(row.imageUrl),
    syllabus: normalizeSyllabus(row.syllabus),
  };
}

export function normalizeSyllabus(value: unknown): CourseSyllabus {
  if (!value || typeof value !== "object") return { ...EMPTY_SYLLABUS };
  const row = value as Record<string, unknown>;
  const text = typeof row.text === "string" ? sanitizeSyllabusHtml(row.text) : null;
  return {
    url: publicHttpUrl(row.url),
    filename: filenameOf(row.filename),
    text: visibleText(text) ? text : null,
  };
}

export function hasSyllabusContent(
  syllabus: CourseSyllabus | null | undefined,
): boolean {
  if (!syllabus) return false;
  return Boolean(syllabus.url || syllabus.text);
}

/**
 * Reduce syllabus HTML to the same allow-list the API stores.
 * Plain text with no tags is kept. Scripts and event handlers are removed.
 */
export function sanitizeSyllabusHtml(input: string): string {
  const source = stripNulls(input);
  let out = "";
  let cursor = 0;
  while (cursor < source.length) {
    const lt = source.indexOf("<", cursor);
    if (lt === -1) {
      out += source.slice(cursor);
      break;
    }
    out += source.slice(cursor, lt);
    if (source.startsWith("<!--", lt)) {
      const end = source.indexOf("-->", lt + 4);
      cursor = end === -1 ? source.length : end + 3;
      continue;
    }
    const tag = tagAt(source, lt);
    if (!tag) {
      out += "&lt;";
      cursor = lt + 1;
      continue;
    }
    if (!tag.closing && DISCARD_CONTENT.has(tag.name)) {
      cursor = skipDiscardedElement(source, tag);
      continue;
    }
    if (DISCARD_TAG.has(tag.name) || !tag.name) {
      cursor = tag.gt + 1;
      continue;
    }
    out += renderTag(source.slice(lt + 1, tag.gt));
    cursor = tag.gt + 1;
  }
  return out.trim();
}

export type SyllabusRenderModel =
  | { kind: "text"; text: string }
  | { kind: "html"; html: string };

/**
 * Safe view of syllabus text.
 * Plain text stays text. Markup is reduced again in the browser before innerHTML.
 */
export function syllabusRenderModel(html: string): SyllabusRenderModel | null {
  const stripped = sanitizeSyllabusHtml(html).trim();
  if (!stripped) return null;
  if (typeof DOMParser === "undefined") {
    if (/<[a-z]/i.test(stripped)) return { kind: "html", html: stripped };
    return { kind: "text", text: stripped };
  }
  const doc = new DOMParser().parseFromString(stripped, "text/html");
  if (!containsElement(doc.body)) {
    const text = doc.body.textContent?.replace(/\u00a0/g, " ").trim() ?? "";
    return text ? { kind: "text", text } : null;
  }
  const safe = serializeChildren(doc.body).trim();
  return safe ? { kind: "html", html: safe } : null;
}

function containsElement(node: ParentNode): boolean {
  for (const child of node.childNodes) {
    if (child.nodeType === 1) return true;
  }
  return false;
}

function filenameOf(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const cleaned = stripNulls(value).replace(/[\u0000-\u001f\u007f]/g, "").trim();
  if (!cleaned) return null;
  return cleaned.slice(0, 255);
}

function visibleText(html: string | null): string {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#160;/g, " ")
    .trim();
}

function tagAt(
  source: string,
  lt: number,
): { name: string; closing: boolean; gt: number } | null {
  const gt = source.indexOf(">", lt + 1);
  if (gt === -1) return null;
  const raw = source.slice(lt + 1, gt).trim();
  const closing = raw.startsWith("/");
  const body = (closing ? raw.slice(1) : raw).trim();
  const match = /^([a-zA-Z][a-zA-Z0-9]*)/.exec(body);
  if (!match) return { name: "", closing, gt };
  return { name: match[1].toLowerCase(), closing, gt };
}

function skipDiscardedElement(
  source: string,
  open: { name: string; gt: number },
): number {
  let depth = 1;
  let cursor = open.gt + 1;
  while (cursor < source.length && depth > 0) {
    const next = source.indexOf("<", cursor);
    if (next === -1) return source.length;
    const tag = tagAt(source, next);
    if (!tag) return source.length;
    if (tag.name === open.name) depth += tag.closing ? -1 : 1;
    cursor = tag.gt + 1;
  }
  return cursor;
}

function renderTag(raw: string): string {
  const body = raw.trim();
  if (!body) return "";
  const closing = body.startsWith("/");
  const content = (closing ? body.slice(1) : body).trim();
  const match = /^([a-zA-Z][a-zA-Z0-9]*)([\s\S]*)$/.exec(content);
  if (!match) return "";
  const tag = match[1].toLowerCase();
  if (!ALLOWED_TAGS.has(tag)) return "";
  if (closing || VOID_TAGS.has(tag)) {
    return closing ? (VOID_TAGS.has(tag) ? "" : `</${tag}>`) : `<${tag}>`;
  }
  const attrs = sanitizeAttributes(tag, match[2].replace(/\/\s*$/, ""));
  return `<${tag}${attrs}>`;
}

function sanitizeAttributes(tag: string, raw: string): string {
  const kept: string[] = [];
  let href: string | null = null;
  for (const [name, value] of parseAttributes(raw)) {
    const key = name.toLowerCase();
    if (key.startsWith("on") || key === "style" || key === "srcdoc") continue;
    if (tag === "a" && key === "href") {
      href = safeHref(value);
    } else if (
      (tag === "td" || tag === "th") &&
      (key === "colspan" || key === "rowspan") &&
      /^\d{1,2}$/.test(value)
    ) {
      kept.push(` ${key}="${value}"`);
    }
  }
  if (tag === "a" && href) {
    kept.unshift(` href="${escapeAttr(href)}" rel="noopener noreferrer"`);
  }
  return kept.join("");
}

function parseAttributes(raw: string): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  let i = 0;
  while (i < raw.length) {
    while (i < raw.length && /\s/.test(raw[i] ?? "")) i += 1;
    if (i >= raw.length || raw[i] === "/") break;
    const start = i;
    while (i < raw.length && /[^\s=/>]/.test(raw[i] ?? "")) i += 1;
    const name = raw.slice(start, i);
    if (!name) break;
    while (i < raw.length && /\s/.test(raw[i] ?? "")) i += 1;
    if (raw[i] !== "=") {
      out.push([name, ""]);
      continue;
    }
    i += 1;
    while (i < raw.length && /\s/.test(raw[i] ?? "")) i += 1;
    let value = "";
    const quote = raw[i];
    if (quote === '"' || quote === "'") {
      const end = raw.indexOf(quote, i + 1);
      if (end === -1) break;
      value = raw.slice(i + 1, end);
      i = end + 1;
    } else {
      const valueStart = i;
      while (i < raw.length && !/\s/.test(raw[i] ?? "") && raw[i] !== ">") i += 1;
      value = raw.slice(valueStart, i);
    }
    out.push([name, decodeEntities(value)]);
  }
  return out;
}

function safeHref(value: string): string | null {
  const compact = stripControlsAndSpace(decodeEntities(value));
  const lower = compact.toLowerCase();
  if (
    lower.startsWith("https://") ||
    lower.startsWith("http://") ||
    lower.startsWith("mailto:")
  ) {
    return compact;
  }
  return null;
}

function serializeChildren(node: ParentNode): string {
  let out = "";
  for (const child of node.childNodes) {
    if (child.nodeType === 3) {
      out += escapeText(child.textContent ?? "");
      continue;
    }
    if (child.nodeType !== 1) continue;
    const el = child as Element;
    const tag = el.tagName.toLowerCase();
    if (DISCARD_CONTENT.has(tag)) continue;
    if (!ALLOWED_TAGS.has(tag)) {
      out += serializeChildren(el);
      continue;
    }
    if (VOID_TAGS.has(tag)) {
      out += `<${tag}>`;
      continue;
    }
    out += `<${tag}${elementAttributes(tag, el)}>${serializeChildren(el)}</${tag}>`;
  }
  return out;
}

function elementAttributes(tag: string, el: Element): string {
  const kept: string[] = [];
  if (tag === "a") {
    const href = safeHref(el.getAttribute("href") ?? "");
    if (href) {
      kept.push(
        ` href="${escapeAttr(href)}" rel="noopener noreferrer" target="_blank"`,
      );
    }
  }
  if (tag === "td" || tag === "th") {
    for (const key of ["colspan", "rowspan"] as const) {
      const value = el.getAttribute(key) ?? "";
      if (/^\d{1,2}$/.test(value)) kept.push(` ${key}="${value}"`);
    }
  }
  return kept.join("");
}

function stripNulls(value: string): string {
  let out = "";
  for (const char of value) {
    if (char !== "\0") out += char;
  }
  return out;
}

function stripControlsAndSpace(value: string): string {
  let out = "";
  for (const char of value) {
    if (char.charCodeAt(0) > 0x20) out += char;
  }
  return out;
}

function decodeEntities(value: string): string {
  let current = value;
  for (let pass = 0; pass < 2; pass += 1) {
    const next = current
      .replace(/&#x([0-9a-f]{1,6});?/gi, (_, hex: string) =>
        safeCodePoint(Number.parseInt(hex, 16)),
      )
      .replace(/&#(\d{1,7});?/g, (_, num: string) =>
        safeCodePoint(Number.parseInt(num, 10)),
      )
      .replace(/&quot;/gi, '"')
      .replace(/&apos;/gi, "'")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&amp;/gi, "&");
    if (next === current) break;
    current = next;
  }
  return current;
}

function safeCodePoint(code: number): string {
  if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return "";
  try {
    return String.fromCodePoint(code);
  } catch {
    return "";
  }
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
