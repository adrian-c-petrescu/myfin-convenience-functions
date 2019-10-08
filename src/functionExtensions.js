
export const installFunctionExtensions = () => {
    Function.prototype.bindNth = function (argIdx, arg) {
        const pThis = this;
        return function (...args) {
            return pThis.apply(pThis, [...args.slice(0, argIdx), arg, ...args.slice(argIdx)]);
        }
    };
};