
export const installDateExtensions = () => {

    Date.prototype.normalizeDateTo1stUTC = function () {
        let newDate = new Date(this.getTime());

        newDate.setUTCDate(1);
        newDate.setUTCHours(0, 0, 0, 0);

        return newDate;
    };

    Date.prototype.normalizeToMidnight = function () {
        let newDate = new Date(this.getTime());
        newDate.setUTCHours(0, 0, 0, 0);
        return newDate;
    };

    Date.prototype.clone = function () {
        return new Date(this.getTime());
    };

    Date.prototype.addMonths = function (nMonths) {
        let newDate = this.clone();
        newDate.setUTCMonth(this.getUTCMonth() + nMonths);
        return newDate;
    };
};

export const removeDateExtensions = () => {
    if(Date.prototype.normalizeDateTo1stUTC) {
        delete Date.prototype.normalizeDateTo1stUTC;
    }

    if(Date.prototype.normalizeToMidnight) {
        delete Date.prototype.normalizeToMidnight;
    }

    if(Date.prototype.clone) {
        delete Date.prototype.clone;
    }

    if(Date.prototype.addMonths) {
        delete Date.prototype.addMonths;
    }
};

export const getRangeMonths = (firstMonth, nMonths = 239) => {
    let months = [];

    let currentMonth = new Date(firstMonth.getTime());

    for(let idx = 0; idx < nMonths; idx ++) {
        months.push(new Date(currentMonth.getTime()));
        currentMonth.setUTCMonth(currentMonth.getUTCMonth() + 1);
    }

    return months;
};

export const getMonthsBetween = (firstMonth, lastMonthInclusive) => {
    let months = [];

    if(firstMonth.getTime() > lastMonthInclusive.getTime()) {
        throw "First month is after last month";
    }

    firstMonth = firstMonth.normalizeDateTo1stUTC();
    lastMonthInclusive = lastMonthInclusive.normalizeDateTo1stUTC();

    while(firstMonth.getTime() <= lastMonthInclusive.getTime()) {
        months.push(new Date(firstMonth.getTime()));

        firstMonth.setUTCMonth(firstMonth.getUTCMonth() + 1);
    }
    return months;
};

export const getMonthCount = (startDate, endDate) => {
    return (endDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
        endDate.getUTCMonth() - startDate.getUTCMonth();
};

