'use strict';

const algolib = require('../index.js');

describe('#coverByDominoes', function(){

    it('should count amount of dominoes, which can be placed on the board', function(){
        let dominoesForCover = algolib.coverByDominoes(3, 3);

        dominoesForCover.should.be.eql(4);

    });

    it('should show zero result with empty size of board', function(){
        let emptyBoard = algolib.coverByDominoes(0, 0);

        emptyBoard.should.be.eql(0);

    });

})



