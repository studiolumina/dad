import { defineConfig } from 'astro/config';
// import critters from "astro-critters";
import icon from "astro-icon";
// import purgecss from "astro-purgecss";
import UnoCSS from "@unocss/astro";
import { colors } from '@unocss/preset-mini';
import { presetUno } from 'unocss';

const saveColorUtils = [...Object.entries(colors)].map(([key, prop]) => {
  key = key.toLowerCase();
  if (typeof prop === 'string') {
    return [`bg-${key}`, `text-${key}`]
  } else {
    return Object.keys(prop).map((lvl) => {
      const classNamesToPreserve = [`bg-${key}-${lvl}`, `text-${key}-${lvl}`];

      if (lvl === 400) {
        classNamesToPreserve.push(`bg-${key}`, `text-${key}`);
      }

      return classNamesToPreserve;
    })
  }
}).flat(Infinity);
console.log(saveColorUtils);
export const config = {
  integrations: [
    UnoCSS({
      presets: [presetUno()],
      injectReset: true,
      safelist: saveColorUtils
    }),
    icon({
      include: {
        'pepicons-pencil': ['sun', 'moon']
      }
    }),
  ],
  brand: {
    text: 'DAD.',
    logo: ''
  },
  site: 'https://studiolumina.github.io',
  base: import.meta.env.PROD ? 'dad' : ''
};


// https://astro.build/config
export default defineConfig(config);