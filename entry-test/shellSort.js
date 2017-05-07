'use.strict';

function shellSort(collection, comparison) {

    if (collection.length === 0) {
        return collection;
    }

    let interval = Math.floor(collection.length / 2);

    for (let i = interval; i; i = Math.floor(i / 2)) {
        for (let j = 0; j + i < collection.length; j++) {
            for (let k = j + i; j >= 0; k -= i, j -= i) {
                if (comparison(collection[k], collection[j])) {
                    let tmpValue = collection[j];
                    collection[j] = collection[k];
                    collection[k] = tmpValue;
                } else {
                    break;
                }
            }
        }
    }
    return collection;
};

module.exports = shellSort;