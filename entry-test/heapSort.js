'use.strict';

function heapSort(binaryHeap, comparison) {
    let sortedCollection = [];

    while(binaryHeap._collection.length > 0){
        sortedCollection.unshift(binaryHeap.shiftRoot());
        binaryHeap.rebuildHeap(comparison);
    }

    return sortedCollection;
}

module.exports = heapSort;