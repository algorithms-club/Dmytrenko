'use.strict';

function combSort(collection, comparison) {

    if (collection.length === 0) {
        return collection;
    }

    let interval = Math.floor(collection.length / 2);

    for (let i = interval; i > 0; i--) {
        for (let j = 0; j + i < collection.length; j++) {
            if (comparison(collection[j + i], collection[j])) {
                let tmpValue = collection[j];
                collection[j] = collection[j + i];
                collection[j + i] = tmpValue;
            }
        }
    }
    return collection;
};

module.exports = combSort;