import { defineConfig } from 'astro/config';
import critters from "astro-critters";
/*
const bootstrap = () => {
  return {
    name: 'bootstrap',
    hooks: {}
  };
};
*/

// https://astro.build/config
export default defineConfig({
  integrations: [critters()],
  site: 'https://studiolumina.github.io',
  base: 'dad'
});