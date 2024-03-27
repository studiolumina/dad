import { defineConfig } from 'astro/config';
// import critters from "astro-critters";
import icon from "astro-icon";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    include: {
      'pepicons-pencil': ['sun', 'moon']
    }
  }), purgecss()],
  site: 'https://studiolumina.github.io',
  base: import.meta.env.DEV ? '' : 'dad'
});