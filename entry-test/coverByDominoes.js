'use.strict';

function coverByDominoes(boardHeight, boardWidth){

    let boardSquare = boardHeight * boardWidth;

    return Math.floor(boardSquare / 2);
};

module.exports = coverByDominoes;