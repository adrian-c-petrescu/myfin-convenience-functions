
export const isInstanceOf = (obj, type) => {
    return type.prototype.isPrototypeOf(obj);
};