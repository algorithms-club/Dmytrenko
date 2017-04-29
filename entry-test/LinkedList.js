'use.strict';

class LinkedList {

    constructor() {
        this._length = 0;
        this.list = {};
    }

    addLast(element) {
        let newObj = {
            value: element,
            next: null,
            prev: null,
        };

        if (this._length === 0) {
            this.list = newObj;
        } else {
            this.list.next = newObj;
            newObj.prev = this.list;
            this.list = newObj;
        }
        this._length++;
    }

    removeLast() {

        this.list.value = this.list.prev.value;
        this.list.next = null;
        this.list.prev = this.list.prev.prev;

        this._length--;
    }

    get(element) {

        let list = this.list;
        for(let i = 0;i < this._length - element;i++){
            list = list.prev;
        }
        return list.value;
    }

}
module.exports = LinkedList;