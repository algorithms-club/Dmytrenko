'use strict';

class BinarySearchTree {
    constructor(value) {
        this._elements = {
            value: value,
            left: undefined,
            right: undefined,
            size: 0
        };
    }

    add(value) {
        if (value === this._elements.value) return new BinarySearchTree(value);
        if (!this._elements.value && !this._elements.left && !this._elements.right) {
            this._elements.value = new BinarySearchTree(value);
            this._elements.size++;
        } else if (value < this._elements.value && !this._elements.left) {
            this._elements.left = new BinarySearchTree(value);
            this._elements.size++;
        } else if (value < this._elements.value && this._elements.left) {
            this._elements.left.add(value);
            this._elements.size++;
        } else if (value > this._elements.value && !this._elements.right) {
            this._elements.right = new BinarySearchTree(value);
            this._elements.size++;
        } else if (value > this._elements.value && this._elements.right) {
            this._elements.right.add(value);
            this._elements.size++;
        }
    }

    remove(value) {
        if (value === this._elements.value) {
            if (!this._elements.right && !this._elements.left) {
                this._elements.value = undefined;
            } else if (this._elements.right && !this._elements.left) {
                this._elements = this._elements.right;
            } else if (!this._elements.right && this._elements.left) {
                this._elements = this._elements.left;
            } else {
                this._elements.value = this._elements.right._elements.value;
                if (this._elements.right._elements.left) {
                    this._elements.left.add(this._elements.right._elements.left._elements.value);
                }
                this._elements.right = this._elements.right._elements.right;
            }
        } else if (value < this._elements.value && this._elements.left) {
            return this._elements.left.remove(value);
        } else if (value > this._elements.value && this._elements.right) {
            return this._elements.right.remove(value);
        }
        return false;
    }

    getMax() {
        return !this._elements.right ? this._elements.value : this._elements.right.getMax();
    }

    getMin() {
        return !this._elements.left ? this._elements.value : this._elements.left.getMin();
    }

    getSize() {
        return this._elements.size;
    }

    getNode(value) {
        if (value === this._elements.value) {
            return this._elements;
        } else if (value < this._elements.value && this._elements.left) {
            return this._elements.left.getNode(value);
        } else if (value > this._elements.value && this._elements.right) {
            return this._elements.right.getNode(value);
        }
        return false;
    }

}
module.exports = BinarySearchTree;