import { defineConfig } from "unocss";
import { colors } from '@unocss/preset-mini';
import Color from 'colorjs.io';

const getContrastingColor = (colorName:string) => {
    const color = colors[colorName as keyof typeof colors];

    if (typeof color === 'string') {
        const c = new Color(color);

        return c.contrastWCAG21('white') > 4.5 ? colors.white : colors.black;
    }

    const c = new Color(color[400] as string);

    return c.contrastWCAG21(color[50] as string) > 4.5 ? color[50] : color[800];
}

export default defineConfig({
    rules: [
        ['h', {
            'font-family': 'BespokeSerif, serif',
            'font-weight': 900,
            'text-wrap': 'balance'
        }],
        ['section', {
            'padding-block': '2.5rem'
        }]
    ],
    content: {
        pipeline: {
            include: /.astro/
        }
    }
});