'use strict';

const algolib = require('../index.js');
const compare = require('../entry-test/compareNumbers');

describe('#selectionSort', function(){

    it('should return empty array if the same array put in parameters', function(){
        let selectionSort = algolib.selectionSort([], compare);

        selectionSort.should.be.eql([]);

    });

    it('should return sorted array', function(){

        let selectionSort = algolib.selectionSort([71, 10, 9, 2, 88, 1, 7, 101, 4, 4, 5, 1, 205], compare);

        selectionSort.should.be.eql([1, 1, 2, 4, 4, 5, 7, 9, 10, 71, 88, 101, 205]);

    });

});



