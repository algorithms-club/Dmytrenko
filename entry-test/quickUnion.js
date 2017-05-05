'use.strict';

class QuickUnion {

    constructor() {
        this._elements = [];
        this._roots = [];
        this._lengthOfTree = 1;
    }

    connect(a, b) {

        if (this.isConnected(a, b)) {
            return;
        }

        if (isNaN(this._elements[a])) {
            this._elements[a] = a;
        }
        this._elements[b] = isNaN(this._elements[b]) ? b : this._elements[b];

        let rootA = findRoot(this._elements[a], this._elements);
        let lengthOfA = this._lengthOfTree;
        let rootB = findRoot(this._elements[b], this._elements);
        let lengthOfB = this._lengthOfTree;

        if (lengthOfA >= lengthOfB) {
            this._elements[rootA] = rootB;
            if(this._roots.includes(rootA)){
                this._roots.splice(this._roots.indexOf(rootA), 1);
            }
            if(!this._roots.includes(rootB)){
                this._roots.push(rootB);
            }
        } else {
            this._elements[rootB] = rootA;
            if(this._roots.includes(rootB)){
                this._roots.splice(this._roots.indexOf(rootB), 1);
            }
            if(!this._roots.includes(rootA)){
                this._roots.push(rootA);
            }
        }

    }

    isConnected(a, b) {
        if (isNaN(this._elements[a]) || isNaN(this._elements[b])) {
            return false;
        }

        let rootA = findRoot(a, this._elements);
        let rootB = findRoot(b, this._elements);

        this._elements[a] = rootA;
        this._elements[b] = rootB;

        return rootA === rootB;
    }

    count() {
        return this._roots.length;
    }

    component(a) {

        return findRoot(a, this._elements);
    }

}

function findRoot(element, array) {
    this._lengthOfTree = 1;
    while (true) {
        if (array[element] === element) {
            return element;
        } else {
            element = array[element];
            this._lengthOfTree++;
        }
    }
}

module.exports = QuickUnion;