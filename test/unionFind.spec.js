'use strict';

const algolib = require('../index.js');

describe('#unionFind', function(){

    it('should create proper data structure ', function(){
        let uf = new algolib.UnionFind();

        uf.connect.should.be.instanceOf(Function);
        uf.isConnected.should.be.instanceOf(Function);
        uf.count.should.be.instanceOf(Function);
        uf.component.should.be.instanceOf(Function);
    })

    it('should #isConnected return false if not connected', function(){
        let uf = new algolib.UnionFind();

        let isElementConnected = uf.isConnected(3,4);
        isElementConnected.should.be.false();
    })

    it('should #isConnected return true if elements are connected', function () {
        let uf = new algolib.UnionFind();

        uf.connect(3,6);
        uf.connect(2,4);
        uf.connect(100,8);
        uf.connect(16,34);
        uf.connect(16,35);

        let isElementConnected = uf.isConnected(34,35);
        isElementConnected.should.be.true();
    })

    it('should #count return count of components', function () {
        let uf = new algolib.UnionFind();

        uf.connect(3,6);
        uf.connect(2,4);
        uf.connect(100,8);
        uf.connect(16,34);
        uf.connect(16,35);

        let countOfComponents = uf.count();
        countOfComponents.should.be.eql(4);
    })

    it('should #component return value of the component', function () {
        let uf = new algolib.UnionFind();

        uf.connect(3,6);
        uf.connect(2,4);
        uf.connect(100,8);
        uf.connect(16,34);
        uf.connect(16,35);

        let valueOfComponent = uf.component(100);
        valueOfComponent.should.be.eql(8);
    })
})



