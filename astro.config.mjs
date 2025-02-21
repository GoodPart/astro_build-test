// @ts-check
import { defineConfig } from "astro/config";

import htmlBeautifier from "astro-html-beautifier";   
import relativeLinks from "astro-relative-links";


import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({ 
  site: "https://goodpart.github.io",
  base: import.meta.env.MODE === "development" ? import.meta.env.DEVELOP_MODE : '.',
  integrations: [htmlBeautifier(), relativeLinks()],
  adapter: vercel(),
  build: {
      
  }
});
