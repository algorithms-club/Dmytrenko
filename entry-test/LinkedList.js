'use.strict';

class LinkedList {

    constructor() {
        this._length = 0;
        this.elements = {};
        this.elementKeyCounterForPush = 1;
        this.elementKeyCounterForPop = -1;
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
            this.elements[this.elementKeyCounterForPush] = this.elements.lastElement;
            this.elements.lastElement = newObj;
            this.elements[this.elementKeyCounterForPush].next = this.elements.lastElement;
            this.elements.lastElement.prev = this.elements[this.elementKeyCounterForPush];
            this.elementKeyCounterForPush++;
        }
        this._length++;
        return this.elements.lastElement;
    }

    removeLast() {

        let removedElement = this.elements.lastElement.value;
        this.elements.lastElement = this.elements.lastElement.prev;
        this.elements.lastElement.next = null;
        if (this.elementKeyCounterForPush === 0 && this.elements[this.elementKeyCounterForPush] !== null) {
            delete this.elements[this.elementKeyCounterForPush];
        } else if (this.elementKeyCounterForPush > 0 && this.elements[this.elementKeyCounterForPush] !== null) {
            delete this.elements[--this.elementKeyCounterForPush];
        } else {
            for(let i = -1; i > this.elementKeyCounterForPop;i--){
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
            this.elements[this.elementKeyCounterForPop] = this.elements.firstElement;
            this.elements.firstElement = newObj;
            this.elements[this.elementKeyCounterForPop].prev = this.elements.firstElement;
            this.elements.firstElement.next = this.elements[this.elementKeyCounterForPop];
            this.elementKeyCounterForPop--;
        }
        this._length++;
        return this.elements.firstElement;
    }

    removeFirst() {

        let removedElement = this.elements.firstElement.value;
        this.elements.firstElement = this.elements.firstElement.next;
        this.elements.firstElement.prev = null;
        if (this.elementKeyCounterForPop === -1 && this.elements[this.elementKeyCounterForPop] !== null) {
            delete this.elements[this.elementKeyCounterForPop];
        } else if (this.elementKeyCounterForPop < -1 && this.elements[this.elementKeyCounterForPop] !== null) {
            delete this.elements[++this.elementKeyCounterForPop];
        } else {
            for(let i = 0; i < this.elementKeyCounterForPush;i++){
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