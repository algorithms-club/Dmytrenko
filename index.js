'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let nextRound = require('./entry-test/nextRound');
let coverByDominoes = require('./entry-test/coverByDominoes');
let UnionFind = require('./entry-test/unionFind');
let QuickUnion = require('./entry-test/quickUnion');

let algolib = {
    bubbleSort,
	  coverByTile,
    nextRound,
    coverByDominoes,
    UnionFind,
    QuickUnion
}

module.exports = algolib;