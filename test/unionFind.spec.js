'use strict';

const algolib = require('../index.js');

describe('#unionFind', function(){

    it('should create proper data structure ', function(){
        let uf = new algolib.UnionFind();

        uf.connect.should.be.instanceOf(Function);
        uf.isConnected.should.be.instanceOf(Function);
        uf.count.should.be.instanceOf(Function);
        uf.component.should.be.instanceOf(Function);

        // uf.connect(3,6);
        // uf.connect(2,4);
        //
        // uf.connect(9907, 5); //error
        //
        // uf.isConnected(2,6); //false;
        // uf.isConnected(4,2); //true;
    })

    it('should #isConnected return false if not connected', function(){
        let uf = new algolib.UnionFind();

        let isElementConnected = uf.isConnected(3,4);
        isElementConnected.should.be.false();
    })

    it('should #isConnected return true if elements are connected', function () {
        let uf = new algolib.UnionFind();

        uf.connect(3,6);

        let isElementConnected = uf.isConnected(3,6);
        isElementConnected.should.be.true();
    })

    it('should #count return count of components', function () {
        let uf = new algolib.UnionFind();

        uf.connect(3,6);
        uf.connect(4,5);

        let countOfComponents = uf.count();
        countOfComponents.should.be.eql(2);
    })

    it('should #component return value of the component', function () {
        let uf = new algolib.UnionFind();

        uf.connect(3,6);

        let valueOfComponent = uf.component(3);
        valueOfComponent.should.be.eql(6);
    })
})



