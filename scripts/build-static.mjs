import { mkdir, readFile, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const [htmlSource, css, javascript, resume] = await Promise.all([
  readFile(new URL("work/preview/index.html", root), "utf8"),
  readFile(new URL("work/preview/styles.css", root), "utf8"),
  readFile(new URL("work/preview/preview.js", root), "utf8"),
  readFile(new URL("public/Shivanya_Resume.pdf", root)),
]);

const html = htmlSource
  .replaceAll("../../public/Shivanya_Resume.pdf", "/Shivanya_Resume.pdf")
  .replace('<link rel="stylesheet" href="./styles.css" />', `<style>${css}</style>`)
  .replace('<script src="./preview.js"></script>', `<script>${javascript}</script>`);

const worker = `const html = ${JSON.stringify(html)};
const resumeBase64 = ${JSON.stringify(resume.toString("base64"))};

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/Shivanya_Resume.pdf") {
      return new Response(decodeBase64(resumeBase64), {
        headers: {
          "content-type": "application/pdf",
          "content-disposition": "inline; filename=Shivanya_Resume.pdf",
          "cache-control": "public, max-age=3600",
        },
      });
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=0, must-revalidate",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  },
};
`;

await rm(new URL("dist", root), { recursive: true, force: true });
await mkdir(new URL("dist/server", root), { recursive: true });
await writeFile(new URL("dist/server/index.js", root), worker);

console.log("Built ShivanyaOS for Sites.");
