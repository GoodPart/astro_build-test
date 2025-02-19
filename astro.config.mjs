// @ts-check
import { defineConfig } from "astro/config";

import htmlBeautifier from "astro-html-beautifier";
import relativeLinks from "astro-relative-links";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://goodpart.github.io",
  base: "/astro_build-test",
  // output: "static",
  integrations: [htmlBeautifier(), relativeLinks()],
  adapter: vercel(),
});
