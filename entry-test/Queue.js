'use strict';

let linkedList = require('./LinkedList');

class Queue {

    constructor() {
        this._queue = new linkedList();
    }

    shift(element) {
        return this._queue.addFirst(element);
    }

    pop() {
        return this._queue.removeLast();
    }
}

module.exports = Queue;