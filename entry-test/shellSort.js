'use.strict';

function shellSort(collection, comparison) {

    if (collection.length === 0) {
        return collection;
    }

    let interval = Math.floor(collection.length / 2);

    for (let i = interval; i > 0; i--) {
        for (let j = 0; j + i - 1 < collection.length; j++) {
            if (comparison(collection[j + i - 1], collection[j])) {
                let tmpValue = collection[j];
                collection[j] = collection[j + i - 1];
                collection[j + i - 1] = tmpValue;
            }
        }
    }
    return collection;
};

module.exports = shellSort;