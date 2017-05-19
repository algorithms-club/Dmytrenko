'use strict';

const algolib = require('../index.js');

describe('#quickSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let quickSort = algolib.quickSort([], algolib.compareNumbers);

        quickSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #quickSort', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        console.time("#quickSort completed at");
        let quickSort = algolib.quickSort(shuffle, compare.compareNumbers);
        console.timeEnd("#quickSort completed at");
        let sort = algolib.isSorted(quickSort, compare.compareNumbers);
        console.log("#quickSort had " + algolib.Comparison.countOfOperations +
            " compare operations for array of " + collection.length + " elements.");
        algolib.Comparison.countOfOperations = 0;
        algolib.Comparison.countOfOperations = 0;

        sort.should.be.eql(true);

    });

});



