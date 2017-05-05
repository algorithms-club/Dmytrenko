'use.strict';

class LinkedList {

    constructor() {
        this._length = 0;
        this.elements = {};
        this._pushCounter = 1;
        this._popCounter = -1;
    }

    addLast(element) {
        let newObj = {
            value: element,
            next: null,
            prev: null,
        };


        if (this._length === 0) {
            this.elements.firstElement = newObj;
        } else if (this._length === 1) {
            this.elements.lastElement = newObj;
            this.elements.lastElement.prev = this.elements.firstElement;
            this.elements.firstElement.next = this.elements.lastElement;
            this.elements.firstElement.prev = null;
        } else {
            this.elements[this._pushCounter] = this.elements.lastElement;
            this.elements.lastElement = newObj;
            this.elements[this._pushCounter].next = this.elements.lastElement;
            this.elements.lastElement.prev = this.elements[this._pushCounter];
            this._pushCounter++;
        }
        this._length++;
        return this.elements.lastElement;
    }

    removeLast() {

        let removedElement = this.elements.lastElement.value;
        this.elements.lastElement = this.elements.lastElement.prev;
        this.elements.lastElement.next = null;
        if (this._pushCounter === 0 && this.elements[this._pushCounter] !== null) {
            delete this.elements[this._pushCounter];
        } else if (this._pushCounter > 0 && this.elements[this._pushCounter] !== null) {
            delete this.elements[--this._pushCounter];
        } else {
            for(let i = -1; i > this._popCounter; i--){
                if(this.elements[i] === null){
                    continue;
                }
                delete this.elements[i];
                break;
            }
        }
        this._length--;
        return removedElement;
    }

    addFirst(element) {
        let newObj = {
            value: element,
            next: null,
            prev: null,
        };


        if (this._length === 0) {
            this.elements.lastElement = newObj;
        } else if (this._length === 1) {
            this.elements.firstElement = newObj;
            this.elements.firstElement.next = this.elements.lastElement;
            this.elements.lastElement.prev = this.elements.firstElement;
            this.elements.lastElement.next = null;
        } else {
            this.elements[this._popCounter] = this.elements.firstElement;
            this.elements.firstElement = newObj;
            this.elements[this._popCounter].prev = this.elements.firstElement;
            this.elements.firstElement.next = this.elements[this._popCounter];
            this._popCounter--;
        }
        this._length++;
        return this.elements.firstElement;
    }

    removeFirst() {

        let removedElement = this.elements.firstElement.value;
        this.elements.firstElement = this.elements.firstElement.next;
        this.elements.firstElement.prev = null;
        if (this._popCounter === -1 && this.elements[this._popCounter] !== null) {
            delete this.elements[this._popCounter];
        } else if (this._popCounter < -1 && this.elements[this._popCounter] !== null) {
            delete this.elements[++this._popCounter];
        } else {
            for(let i = 0; i < this._pushCounter; i++){
                if(this.elements[i] === null){
                    continue;
                }
                delete this.elements[i];
                break;
            }
        }
        this._length--;
        return removedElement;
    }

}
module.exports = LinkedList;