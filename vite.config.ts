// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Static build mode is triggered by STATIC_BUILD=1 (used for Hostinger deployment).
// Inside Lovable's sandbox this is ignored — preview keeps working on Cloudflare.
const STATIC = process.env.STATIC_BUILD === "1";

// Read blog slugs from src/lib/blog-posts.ts for prerender route list.
const __dirname = dirname(fileURLToPath(import.meta.url));
const blogSrc = readFileSync(join(__dirname, "src/lib/blog-posts.ts"), "utf8");
const blogSlugs = [...blogSrc.matchAll(/slug:\s*["'`]([a-z0-9-]+)["'`]/g)].map((m) => m[1]);

const staticPaths = [
  "/",
  "/blog",
  "/privacy",
  "/terms",
  "/refund",
  ...blogSlugs.map((s) => `/blog/${s}`),
];

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  ...(STATIC && { nitro: { preset: "node-server" } }),
});
