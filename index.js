'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let nextRound = require('./entry-test/nextRound');
let coverByDominoes = require('./entry-test/coverByDominoes');
let UnionFind = require('./entry-test/unionFind');
let QuickUnion = require('./entry-test/quickUnion');
let selectionSort = require('./entry-test/selectionSort');
let insertionSort = require('./entry-test/insertionSort');
let shellSort = require('./entry-test/shellSort');
let shuffleCollection = require('./entry-test/shuffleCollection');
let isSorted = require('./entry-test/isSorted');
let compareNumbers = require('./entry-test/compareNumbers');
let combSort = require('./entry-test/combSort');

let algolib = {
    bubbleSort,
	  coverByTile,
    nextRound,
    coverByDominoes,
    UnionFind,
    QuickUnion,
    selectionSort,
    insertionSort,
    shellSort,
    shuffleCollection,
    isSorted,
    compareNumbers,
    combSort
};

module.exports = algolib;