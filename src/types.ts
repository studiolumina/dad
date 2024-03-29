import type { Image } from "astro:assets";

export type Sizes = 'sm' | 'md' | 'lg';
export type Style = 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark';
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
