// @ts-check
import { defineConfig } from "astro/config";

import htmlBeautifier from "astro-html-beautifier";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // base: "/astro_build-test",
  output: "static",
  integrations: [htmlBeautifier()],
  adapter: vercel(),
});
