interface VarsObj {
    [index: string]: string|number;
}
export const createVars = (varsObj:VarsObj, prefix = 'bs') => {
    const result:VarsObj = {};
    Object.entries(varsObj).map(([ key, value ]) => {
        result[`${prefix ? `${prefix}-` : ''}${key.replace(/(.)([A-Z])/g, '$1-$2')}`.toLowerCase()] = value;
    });

    return result;
}