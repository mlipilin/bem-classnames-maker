function isArray (o: any = null): boolean {
    return Array.isArray(o);
}

function isObject (o: any = null): boolean {
    return o !== null && !isArray(o) && typeof o === 'object';
}

function isString (o: any = null): boolean {
    return typeof o === 'string';
}

export { isArray, isObject, isString };
export default { isArray, isObject, isString };
