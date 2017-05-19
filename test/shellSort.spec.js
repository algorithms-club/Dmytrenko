'use strict';

const algolib = require('../index.js');

describe('#shellSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let shellSort = algolib.shellSort([], algolib.compareNumbers);

        shellSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #shellSort', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        console.time("#shellSort completed at");
        let shellSort = algolib.shellSort(shuffle, compare.compareNumbers);
        console.timeEnd("#shellSort completed at");
        let sort = algolib.isSorted(shellSort, compare.compareNumbers);
        console.log("#shellSort had " + algolib.Comparison.countOfOperations +
            " compare operations for array of " + collection.length + " elements.");
        algolib.Comparison.countOfOperations = 0;

        sort.should.be.eql(true);

    });

});



