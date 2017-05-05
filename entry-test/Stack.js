'use strict';

let linkedList = require('./LinkedList');

class Stack {

    constructor() {
        this._stack = new linkedList();
    }

    push(element) {
        return this._stack.addLast(element);
    }

    pop() {
        return this._stack.removeLast();
    }
}

module.exports = Stack;