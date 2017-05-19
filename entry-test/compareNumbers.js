'use strict';

class Comparison {

    compareNumbers(a, b) {
        if (typeof Comparison.countOfOperations === "undefined") {
            Comparison.countOfOperations = 0;
        }
        Comparison.countOfOperations++;
        return a < b;
    }
}

module.exports = Comparison;