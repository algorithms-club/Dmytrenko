'use strict';

const algolib = require('../index.js');

describe('#insertionSort', function(){

    it('should return empty array if the same array put in parameters', function(){
        let insertionSort = algolib.insertionSort([], algolib.compareNumbers);

        insertionSort.should.be.eql([]);

    });

    it('should return sorted array', function(){

        let insertionSort = algolib.insertionSort([71, 10, 9, 2, 88, 1, 7, 101, 4, 4, 5, 1, 205], algolib.compareNumbers);

        insertionSort.should.be.eql([1, 1, 2, 4, 4, 5, 7, 9, 10, 71, 88, 101, 205]);

    });

});



