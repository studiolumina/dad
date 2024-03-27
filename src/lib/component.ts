export const getId = (name:string) => {
    return name+globalThis.crypto.randomUUID();
}