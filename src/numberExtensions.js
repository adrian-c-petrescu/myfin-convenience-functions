
export const installNumberExtensions = () => {
//http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
    Number.prototype.format = function (n, x, commaChar = ',') {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&' + commaChar);
    };

//Number.prototype.formatWithBreaks()

    Number.prototype.truncateLast3Digits = function () {
        const intNum = ~~this;
        const remainder = intNum % 1000;

        return intNum - remainder;
    };
};

export const removeNumberExtensions = () => {
    if(Number.prototype.format) {
        delete Number.prototype.format;
    }

    if(Number.prototype.truncateLast3Digits) {
        delete Number.prototype.truncateLast3Digits;
    }
};
