'use strict';

const algolib = require('../index.js');

describe('#mergeSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let mergeSort = algolib.mergeSort([], algolib.compareNumbers);

        mergeSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #mergeSort', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        console.time("#mergeSort completed at");
        let mergeSort = algolib.mergeSort(shuffle, compare.compareNumbers);
        console.timeEnd("#mergeSort completed at");
        let sort = algolib.isSorted(mergeSort, compare.compareNumbers);
        console.log("#mergeSort had " + algolib.Comparison.countOfOperations +
            " compare operations for array of " + collection.length + " elements.");
        algolib.Comparison.countOfOperations = 0;

        sort.should.be.eql(true);

    });

});



