import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const output = new URL("dist-pages/", root);

const [htmlSource, css, javascript] = await Promise.all([
  readFile(new URL("work/preview/index.html", root), "utf8"),
  readFile(new URL("work/preview/styles.css", root), "utf8"),
  readFile(new URL("work/preview/preview.js", root), "utf8"),
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL("public/", root), output, { recursive: true });

await Promise.all([
  writeFile(new URL("index.html", output), htmlSource),
  writeFile(new URL("styles.css", output), css),
  writeFile(new URL("preview.js", output), javascript),
]);

console.log("Built ShivanyaOS for Cloudflare Pages.");
