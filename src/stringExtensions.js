export const installStringExtensions = () => {
    String.prototype.truncateTo = function (nChars) {
        if (this.length <= nChars) {
            return this;
        }

        return this.substr(0, nChars - 1) + '...';
    }
};
