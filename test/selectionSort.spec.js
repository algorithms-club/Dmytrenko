'use strict';

const algolib = require('../index.js');

describe('#selectionSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let selectionSort = algolib.selectionSort([], algolib.compareNumbers);

        selectionSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #selectionSort', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        console.time("#selectionSort completed at");
        let selectionSort = algolib.selectionSort(shuffle, compare.compareNumbers);
        console.timeEnd("#selectionSort completed at");
        let sort = algolib.isSorted(selectionSort, compare.compareNumbers);
        console.log("#selectionSort had " + algolib.Comparison.countOfOperations +
            " compare operations for array of " + collection.length + " elements.");
        algolib.Comparison.countOfOperations = 0;

        sort.should.be.eql(true);

    });

});



