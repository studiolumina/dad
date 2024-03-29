import { defineConfig } from 'astro/config';
// import critters from "astro-critters";
import icon from "astro-icon";

import purgecss from "astro-purgecss";


export const config = {
  integrations: [icon({
    include: {
      'pepicons-pencil': ['sun', 'moon']
    }
  }), purgecss()],
  brand: {
    text: 'DAD.',
    logo: '',
  },
  site: 'https://studiolumina.github.io',
  base: import.meta.env.DEV ? '' : '/dad'
}

// https://astro.build/config
export default defineConfig(config);