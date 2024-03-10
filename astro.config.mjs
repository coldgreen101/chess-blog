import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://gambit-chronicles.netlify.app/",
  integrations: [svelte()]
});