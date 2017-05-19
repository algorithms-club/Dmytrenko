'use.strict';

function quickSort(collection, comparison) {

    if (collection.length === 0) {
        return collection;
    }

    let collection1 = [];
    let collection2 = [];
    let pivot = collection[0];

    for (let i = 1; i < collection.length; i++) {
        if (comparison(collection[i], pivot))
            collection1.push(collection[i]);
        else
            collection2.push(collection[i]);
    }

    return quickSort(collection1, comparison).concat(pivot, quickSort(collection2, comparison));

}

module.exports = quickSort;