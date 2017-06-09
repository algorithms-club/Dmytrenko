'use strict';

const algolib = require('../index.js');

describe('#combSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let combSort = algolib.combSort([], algolib.compareNumbers);

        combSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #combSort', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        console.time("#combSort completed at");
        let combSort = algolib.combSort(shuffle, compare.compareNumbers);
        console.timeEnd("#combSort completed at");
        let sort = algolib.isSorted(combSort, compare.compareNumbers);
        console.log("#combSort had " + algolib.Comparison.countOfOperations +
            " compare operations for array of " + collection.length + " elements.");
        algolib.Comparison.countOfOperations = 0;

        sort.should.be.eql(true);

    });

});



