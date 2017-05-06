'use strict';

const algolib = require('../index.js');

describe('#selectionSort', function(){

    it('should return empty array if the same array put in parameters', function(){
        let selectionSort = algolib.selectionSort([], algolib.compareNumbers);

        selectionSort.should.be.eql([]);

    });

    it('should return sorted array', function(){

        let selectionSort = algolib.selectionSort([71, 10, 9, 2, 88, 1, 7, 101, 4, 4, 5, 1, 205], algolib.compareNumbers);

        selectionSort.should.be.eql([1, 1, 2, 4, 4, 5, 7, 9, 10, 71, 88, 101, 205]);

    });

});



