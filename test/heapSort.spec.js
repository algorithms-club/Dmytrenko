'use strict';

const algolib = require('../index.js');

describe('#heapSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let quickSort = algolib.quickSort([], algolib.compareNumbers);

        quickSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #heapSort', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }
        let length = collection.length;

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        console.time("#heapSort completed at");
        let binaryHeap = new algolib.BinaryHeap(shuffle, compare.compareNumbers);
        let heapSort = algolib.heapSort(binaryHeap, compare.compareNumbers);
        console.timeEnd("#heapSort completed at");
        let sort = algolib.isSorted(heapSort, compare.compareNumbers);
        console.log("#heapSort had " + algolib.Comparison.countOfOperations +
            " compare operations for array of " + length + " elements.");
        algolib.Comparison.countOfOperations = 0;

        sort.should.be.eql(true);

    });

});



