'use strict';

const algolib = require('../index.js');

describe('#shuffleCollection', function(){

    it('should return shuffled collection', function(){

        let shuffle = algolib.shuffleCollection([10, 2, 67, 33, 5, 14, 333, 8, 0, 1, 8]);
        let sort = algolib.isSorted(shuffle, algolib.compareNumbers);

        sort.should.be.eql(false);

    });

});



