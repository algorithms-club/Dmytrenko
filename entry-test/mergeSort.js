'use.strict';

function mergeSort(collection, comparison) {

    if (collection.length === 0) {
        return collection;
    }

    if (collection.length === 1) {
        return collection;
    } else {
        let collection1 = collection.slice(0, Math.floor(collection.length / 2));
        let collection2 = collection.slice(Math.floor(collection.length / 2));
        return merge(mergeSort(collection1, comparison), mergeSort(collection2, comparison), comparison);
    }
}

function merge(collection1, collection2, comparison) {
    let i, j;
    let collection = [];

    for (i = 0, j = 0; i < collection1.length && j < collection2.length;) {
        if (comparison(collection1[i], collection2[j])) {
            collection.push(collection1[i]);
            i++;
        } else {
            collection.push(collection2[j]);
            j++;
        }
    }
    if (i === collection1.length) {
        collection.push.apply(collection, collection2.slice(j, collection2.length));
    } else if (j === collection2.length) {
        collection.push.apply(collection, collection1.slice(i, collection1.length));
    }
    return collection;
}

module.exports = mergeSort;