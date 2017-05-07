'use strict';

const algolib = require('../index.js');

describe('#selectionSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let selectionSort = algolib.selectionSort([], algolib.compareNumbers);

        selectionSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #selectionSort', function () {

        let shuffle = algolib.shuffleCollection([71, 10, 9, 2, 88, 1, 7, 101, 4, 4, 5, 1, 205]);
        let selectionSort = algolib.selectionSort(shuffle, algolib.compareNumbers);
        let sort = algolib.isSorted(selectionSort, algolib.compareNumbers);

        sort.should.be.eql(true);

    });

});



