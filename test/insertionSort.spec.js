'use strict';

const algolib = require('../index.js');

describe('#insertionSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let insertionSort = algolib.insertionSort([], algolib.compareNumbers);

        insertionSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #insertionSort', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        console.time("#insertionSort completed at");
        let insertionSort = algolib.insertionSort(shuffle, compare.compareNumbers);
        console.timeEnd("#insertionSort completed at");
        let sort = algolib.isSorted(insertionSort, compare.compareNumbers);
        console.log("#insertionSort had " + algolib.Comparison.countOfOperations +
            " compare operations for array of " + collection.length + " elements.");
        algolib.Comparison.countOfOperations = 0;

        sort.should.be.eql(true);

    });

});



