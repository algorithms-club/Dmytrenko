'use strict';

const algolib = require('../index.js');

describe('#combSort', function () {

    it('should return empty array if the same array put in parameters', function () {
        let combSort = algolib.combSort([], algolib.compareNumbers);

        combSort.should.be.eql([]);

    });

    it('should shuffle collection and then check, that it is sorted after function #combSort', function () {

        let shuffle = algolib.shuffleCollection([71, 10, 9, 2, 88, 1, 7, 101, 4, 4, 5, 1, 205]);
        let combSort = algolib.combSort(shuffle, algolib.compareNumbers);
        let sort = algolib.isSorted(combSort, algolib.compareNumbers);

        sort.should.be.eql(true);

    });

});



