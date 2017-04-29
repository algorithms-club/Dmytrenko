'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let nextRound = require('./entry-test/nextRound');
let coverByDominoes = require('./entry-test/coverByDominoes');
let LinkedList = require('./entry-test/LinkedList');

let algolib = {
    bubbleSort,
	coverByTile,
    nextRound,
    coverByDominoes,
    LinkedList
}

module.exports = algolib;