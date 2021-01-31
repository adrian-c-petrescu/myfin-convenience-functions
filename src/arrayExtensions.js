
export const installArrayExtensions = () => {
    Array.prototype.binarySearch = function (item, locatorFct) {
        let minIdx = 0, maxIdx = this.length - 1;
        while (minIdx <= maxIdx) {

            let mid = Math.floor((minIdx + maxIdx) / 2);

            let obj = this[mid];
            let current = locatorFct(this[mid]);

            //console.log(`min: ${minIdx}; max: ${maxIdx}; mid: ${mid}; pred: ${order}`);

            let order = item - current;

            if (order === 0) {
                return obj;
            } else if (order < 0) {
                maxIdx = mid - 1;
            } else {
                minIdx = mid + 1;
            }
        }
        return null;
    };

    Array.prototype.distinct = function () {
        let u = {}, a = [];
        for (let i = 0, l = this.length; i < l; ++i) {
            if (u.hasOwnProperty(this[i])) {
                continue;
            }
            a.push(this[i]);
            u[this[i]] = 1;
        }
        return a;
    };

    Array.prototype.groupBy = function (lambda) {
        let groups = {};

        this.forEach(item => {
            const key = lambda(item);
            const grp = groups[key];
            if (grp) {
                grp.push(item);
            } else {
                groups[key] = [item];
            }
        });

        return groups;
    };

    Array.prototype.selectMany = function (lambda = x => x) {
        return this.reduce((acc, val) => [...acc, ...lambda(val)], []);
    };

    Array.prototype.toLookup = function (lambda = x => x) {
        const lookup = {};

        this.forEach(item => {
            lookup[lambda(item)] = true;
        });

        return lookup;
    };

    Array.prototype.sum = function (lambda = x => x) {
        return this.reduce((prvValue, currentItem) => prvValue + lambda(currentItem), 0);
    };

    Array.prototype.max = function (lambda = x => x) {
        if (this.length === 0) {
            return 0;
        }
        return Math.max(...this.map(item => lambda(item)));
    };


    Array.prototype.min = function (lambda = x => x) {
        if (this.length === 0) {
            return 0;
        }

        return Math.min(...this.map(item => lambda(item)));
    };


    Array.prototype.last = function () {
        if (this.length === 0) {
            throw new Error('Array.last called on empty array');
        }
        return this[this.length - 1];
    }

    Array.prototype.lastOrNull = function() {
        if (this.length === 0) {
            return null;
        }
        return this[this.length - 1];
    }
};

export const removeArrayExtensions = () => {
    if(Array.prototype.binarySearch) {
        delete Array.prototype.binarySearch;
    }

    if(Array.prototype.distinct) {
        delete Array.prototype.distinct;
    }

    if(Array.prototype.groupBy) {
        delete Array.prototype.groupBy;
    }

    if(Array.prototype.selectMany) {
        delete Array.prototype.selectMany;
    }

    if(Array.prototype.toLookup) {
        delete Array.prototype.toLookup;
    }

    if(Array.prototype.sum) {
        delete Array.prototype.sum;
    }

    if(Array.prototype.min) {
        delete Array.prototype.min;
    }

    if(Array.prototype.max) {
        delete Array.prototype.max;
    }

};

export const generateArray = (count, generatorFct) => {
    let arr = [];

    for(let idx = 0; idx < count; idx ++) {
        arr.push(generatorFct(idx));
    }
    return arr;
};


export const arrayAddItemwise = (array1, array2) => {
    return array1.map((item, idx) => item + array2[idx]);
};

export const emptyArray = [];
