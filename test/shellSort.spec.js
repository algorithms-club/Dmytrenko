'use strict';

const algolib = require('../index.js');

describe('#shellSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let shellSort = algolib.shellSort([], algolib.compareNumbers);

        shellSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #shellSort', function () {

        let shuffle = algolib.shuffleCollection([71, 10, 9, 2, 88, 1, 7, 101, 4, 4, 5, 1, 205]);
        let shellSort = algolib.selectionSort(shuffle, algolib.compareNumbers);
        let sort = algolib.isSorted(shellSort, algolib.compareNumbers);

        sort.should.be.eql(true);

    });

});



