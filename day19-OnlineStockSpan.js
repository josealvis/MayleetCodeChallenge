// Write a class StockSpanner which collects daily price quotes for some stock, 
// and returns the span of that stock's price for the current day.

// The span of the stock's price today is defined as the maximum number of consecutive days 
// (starting from today and going backwards) for which the price of the stock was less than or 
// equal to today's price.

// For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], 
// then the stock spans would be [1, 1, 1, 2, 1, 4, 6].


class StockSpanner {
    constructor() {
        this.currentDay = -1;
        this.valTracker = []
    }

    next(price) {
        this.currentDay++;
        return this.validateStonkValue(price);
    }

    validateStonkValue(price) {
        let stonk = 1;
        let preVal = this.valTracker[this.currentDay - 1];
        while (preVal && preVal.val <= price) {
            stonk += preVal.stonk;
            preVal = this.valTracker[this.currentDay - stonk];
        }
        this.addVal(price, stonk);
        return stonk;
    }

    addVal(val, stonk) {
        this.valTracker.push({val,stonk});
    }
};

exports.solution = StockSpanner;