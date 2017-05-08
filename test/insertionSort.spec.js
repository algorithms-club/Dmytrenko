'use strict';

const algolib = require('../index.js');

describe('#insertionSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let insertionSort = algolib.insertionSort([], algolib.compareNumbers);

        insertionSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #insertionSort', function () {

        let shuffle = algolib.shuffleCollection([71, 10, 9, 2, 88, 1, 7, 101, 4, 4, 5, 1, 205]);
        let insertionSort = algolib.insertionSort(shuffle, algolib.compareNumbers);
        let sort = algolib.isSorted(insertionSort, algolib.compareNumbers);

        sort.should.be.eql(true);

    });

});



