// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://calm-hotteok-e307a3.netlify.app/",
  integrations: [tailwind()]
});