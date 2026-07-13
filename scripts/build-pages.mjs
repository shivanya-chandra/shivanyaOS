import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const output = new URL("dist-pages/", root);
const resumePath = "/Shivanya_Resume.pdf";

const [htmlSource, css, javascript] = await Promise.all([
  readFile(new URL("work/preview/index.html", root), "utf8"),
  readFile(new URL("work/preview/styles.css", root), "utf8"),
  readFile(new URL("work/preview/preview.js", root), "utf8"),
]);

const rewriteResumePath = (source) =>
  source.replaceAll("../../public/Shivanya_Resume.pdf", resumePath);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await Promise.all([
  writeFile(new URL("index.html", output), rewriteResumePath(htmlSource)),
  writeFile(new URL("styles.css", output), css),
  writeFile(new URL("preview.js", output), rewriteResumePath(javascript)),
  copyFile(
    new URL("public/Shivanya_Resume.pdf", root),
    new URL("Shivanya_Resume.pdf", output),
  ),
]);

console.log("Built ShivanyaOS for Cloudflare Pages.");
