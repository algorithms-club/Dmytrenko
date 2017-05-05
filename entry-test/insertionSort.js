'use.strict';

function insertionSort(collection, comparison) {

    if (collection.length === 0) {
        return collection;
    }

    for (let i = 1; i < collection.length; i++) {
        let min = collection[i];
        for (let j = i - 1; j >= 0; j--) {
            if (comparison(min, collection[j])) {
                let tmpValue = collection[j];
                collection[j] = min;
                collection[j + 1] = tmpValue;
            } else {
                break;
            }
        }
    }
    return collection;
};

module.exports = insertionSort;