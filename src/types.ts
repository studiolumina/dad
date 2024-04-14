// @unocss-include
import type { Image } from "astro:assets";
import { colors } from '@unocss/preset-mini';

export type Sizes = 'sm' | 'md' | 'lg';
export type Styles = Lowercase<'current'|'inherit'|'transparent'|'light'|'dark'|'white'|'black'|`${keyof Omit<typeof colors, 'current'|'inherit'|'transparent'|'light'|'dark'|'white'|'black'>}-${50|100|200|300|400|500|600|700|800|900|950}`>;
export type Themes = 'light' | 'dark';

export interface ImageProps  {
    src: string;
    alt?: string;
    width: `${number}`|number;
    height: `${number}`|number;
    link?: string;
}

export type AstroImageProps = Pick<Parameters<typeof Image>, 0>[0];

export type Positions = 'start' | 'center' | 'end';
