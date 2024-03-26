

const createKey = (key: string, i:number, ns:string = '') => `${key}-${i === 0 ? '000' : i * 100}${ns !== '' ? `-${ns}` : ns}`

export const createPalette = (colors:string|string[], key:string) => {
	return Object.assign({}, ...(typeof colors === 'string' ? colors.split(',') : colors).map((hex:string, i: number) => {
        const { r, g, b } = getRGB(hex);
        const { h, s, l, hsl } = getHSL(hex);

        return {
		    [createKey(key, i, 'hex')]: hex.indexOf('#') !== 0 ? `#${hex}` : hex,
            [createKey(key, i, 'rgb')]: `${r}, ${g}, ${b}`,
            [createKey(key, i, 'hsl')]: `${h} ${s} ${l}`,
            [createKey(key, i)]: hsl
        }
	}))
}



const RGBREGEX = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

const getHSL = (hexStr: string) => {
    let {
        r, g, b
    } = getRGB(hexStr);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h! /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360 * h!);
    var colorInHSL = 'hsl(' + h + ' ' + s + '% ' + l + '%)';
    return {
        h, s, l, hsl: colorInHSL
    }
}

const getRGB = (hexStr: string) => {
    const [_fullMatch, r, g, b] = hexStr.match(RGBREGEX)!;
    
    return {
        r: parseInt(r, 16),
        g: parseInt(g, 16),
        b: parseInt(b, 16)
    }
}

