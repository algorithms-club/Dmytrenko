'use strict';

const algolib = require('../index.js');

describe('#shuffleCollection', function () {

    it('should return shuffled collection', function () {

        let collection = [];
        for (let i = -5000; i < 5000; i++) {
            collection.push(i);
        }

        let compare = new algolib.Comparison();
        let shuffle = algolib.shuffleCollection(collection);
        let sort = algolib.isSorted(shuffle, compare.compareNumbers);

        sort.should.be.eql(false);

    });

});



