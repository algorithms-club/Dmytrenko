'use.strict';

class UnionFind {

    constructor() {
        this._elements = [];
    }

    connect(a, b) {
        //                      1
        // if(isNaN(this._elements[a])){
        //     this._elements[a] = a;
        //     //this._elements[1] = 1;
        // }

        if(this.isConnected(a, b)){
            return;
        }

        this._elements[a] = isNaN(this._elements[a] ? a : this._elements[a]);
        this._elements[b] = isNaN(this._elements[b] ? b : this._elements[b]);


        let componentA = this._elements[a];
        let componentB = this._elements[b];

        for(let i = 0;i < this._elements.length;i++){
            if(this._elements[i] === componentA){
                this._elements[i] = componentB;
            }
        }

        // this._elements.forEach(function (value, i , elements) {
        //     if (value == componentA) {
        //         value = componentB;
        //     }
        // }){
        //
        // }

    }

    isConnected(a, b) {
        //0,1
        //[undefined, undefined]

        if(isNaN(this._elements[a]) || isNaN(this._elements[b])){
            return false;
        }

        return this._elements[a] === this._elements[b];
    }

    count() {

        let componentsArray = 0;
        let i, j;

        for( i = 0, j = 0;i < this._elements.length;i++){
            if(isNaN(this._elements[i])){
                continue;
            }

            if(this._elements[i] = this._elements.indexOf(i)){
                componentsArray++;
            }
        }
        return componentsArray;
    }

    component(a) {

        return this._elements[a];
    }
}

module.exports = UnionFind;