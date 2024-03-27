export type Sizes = 'sm' | 'md' | 'lg';
export type Style = 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark';

export interface ImageProps  {
    src: string|ImageMetadata;
    alt?: string;
    width: `${number}`|number;
    height: `${number}`|number;
    link?: string;
}

export type Positions = 'start' | 'center' | 'end';
