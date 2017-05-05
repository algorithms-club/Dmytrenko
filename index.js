'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let nextRound = require('./entry-test/nextRound');
let coverByDominoes = require('./entry-test/coverByDominoes');
let UnionFind = require('./entry-test/unionFind');
let QuickUnion = require('./entry-test/quickUnion');
let LinkedList = require('./entry-test/LinkedList');
let Stack = require('./entry-test/Stack');
let Queue = require('./entry-test/Queue');

let algolib = {
    bubbleSort,
	coverByTile,
    nextRound,
    coverByDominoes,
    UnionFind,
    QuickUnion,
    LinkedList,
    Stack,
    Queue
};

module.exports = algolib;