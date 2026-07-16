import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders ShivanyaOS", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>ShivanyaOS · Shivanya Chandra<\/title>/i);
  assert.match(html, /ShivanyaOS/);
  assert.match(html, /Shivanya Chandra/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps finished-site metadata and source content", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /ShivanyaOS/);
  assert.match(page, /AI Pipeline Observability/);
  assert.match(page, /RAG Reliability Evaluation/);
  assert.doesNotMatch(page, /résumé|resume|Shivanya_Resume/i);
  assert.match(layout, /title:\s*"ShivanyaOS · Shivanya Chandra"/);
  assert.match(packageJson, /"name": "shivanya-os"/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("keeps the Cloudflare portfolio deep, human, and recruiter-friendly", async () => {
  const [html, javascript] = await Promise.all([
    readFile(new URL("../work/preview/index.html", import.meta.url), "utf8"),
    readFile(new URL("../work/preview/preview.js", import.meta.url), "utf8"),
  ]);

  assert.match(html, /Start Here/);
  assert.match(html, /Human Stuff/);
  assert.match(javascript, /Outside the Terminal/);
  assert.match(javascript, /SafeDesk/);
  assert.match(javascript, /Object-Oriented Programming Teaching Assistant/);
  assert.match(javascript, /Purdue College of Health and Human Sciences/);
  assert.match(html, /ShivanyaOS Mobile/);
  assert.match(javascript, /Not every prompt deserves the most expensive model/);
  assert.match(javascript, /30-second failure visibility/);
  assert.match(javascript, /RAG Reliability Evaluation/);
  assert.match(html, /looking for climbing shoes/i);
  assert.match(javascript, /Route the Signal/);
  assert.match(javascript, /virtualDirectories/);
  assert.match(javascript, /Cannot terminate the shell currently issuing the command/);
  assert.match(javascript, /Why an operating system\?/);
  assert.match(javascript, /runStartup\(\{ full:/);
  assert.doesNotMatch(`${html}\n${javascript}`, /résumé|resume|Shivanya_Resume/i);
});

test("does not publish a résumé asset", async () => {
  const response = await render("/Shivanya_Resume.pdf");
  assert.equal(response.status, 404);
});
