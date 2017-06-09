'use.strict';

class BinaryHeap {
    constructor(collection, comparison) {
        this._collection = collection;
        this.toBinaryHeap(comparison);
    }

    getHeap() {
        return this._collection;
    }

    shiftRoot() {
        if (this._collection.length === 0) {
            return this._collection;
        }

        return this._collection.shift();
    }

    toBinaryHeap(comparison) {

        if (this._collection.length === 0) {
            return this._collection;
        }

        if (this._collection.length % 2 === 0) {
            if (comparison(this._collection[Math.floor(this._collection.length / 2)], this._collection[this._collection.length - 1])) {
                this._switch(Math.floor(this._collection.length / 2), this._collection.length - 1);
            }
            for (let i = this._collection.length - 2; i >= 1;) {
                this._checkElements(i, comparison);
                i -= 2;
            }
        } else {
            for (let i = this._collection.length - 1; i >= 1;) {
                this._checkElements(i, comparison);
                i -= 2;
            }
        }
    }

    moveElementUpInHeap(indexOfMovedElement, comparison) {
        let maxIndex = this._findMax(((indexOfMovedElement + 1) * 2) - 1, (indexOfMovedElement + 1) * 2, comparison);
        if (comparison(this._collection[indexOfMovedElement], this._collection[maxIndex])) {
            this._switch(indexOfMovedElement, maxIndex);
            this.moveElementUpInHeap(maxIndex, comparison);
        }
    }

    moveElementDownInHeap(indexOfMovedElement, comparison) {
        let maxIndex = this._findMax(((indexOfMovedElement + 1) * 2) - 1, ((indexOfMovedElement + 1) * 2), comparison);
        if (comparison(this._collection[indexOfMovedElement], this._collection[maxIndex])) {
            this._switch(indexOfMovedElement, maxIndex);
            this.moveElementDownInHeap(maxIndex, comparison);
        }
    }

    rebuildHeap(comparison) {
        this._collection.unshift(this._collection[this._collection.length - 1]);
        this._collection.pop();
        this.moveElementDownInHeap(0, comparison);
    }

    _checkElements(index, comparison) {
        let maxIndex = this._findMax(index, index - 1, comparison);
        if (comparison(this._collection[Math.floor((index - 1) / 2)], this._collection[maxIndex])) {
            this._switch(Math.floor((index - 1) / 2), maxIndex);
            this.moveElementUpInHeap(maxIndex, comparison);
        }
    }

    _switch(index1, index2) {
        let tmpValue = this._collection[index2];
        this._collection[index2] = this._collection[index1];
        this._collection[index1] = tmpValue;
    }

    _findMax(index1, index2, comparison) {
        if (comparison(this._collection[index1], this._collection[index2])) {
            return index2;
        } else {
            return index1;
        }
    }
}

module.exports = BinaryHeap;