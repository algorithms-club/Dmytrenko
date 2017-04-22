'use strict';

const algolib = require('../index.js');

describe('#quickUnion', function(){

    it('should create proper data structure ', function(){
        let qu = new algolib.QuickUnion();

        qu.connect.should.be.instanceOf(Function);
        qu.isConnected.should.be.instanceOf(Function);
        // qu.count.should.be.instanceOf(Function);
        // qu.component.should.be.instanceOf(Function);

        // uf.connect(3,6);
        // uf.connect(2,4);
        //
        // uf.connect(9907, 5); //error
        //
        // uf.isConnected(2,6); //false;
        // uf.isConnected(4,2); //true;
    })

    it('should #isConnected return false if not connected', function(){
        let qu = new algolib.QuickUnion();

        let isElementConnected = qu.isConnected(3,4);
        isElementConnected.should.be.false();
    })

    it('should #isConnected return true if elements are connected', function () {
        let qu = new algolib.QuickUnion();

        qu.connect(3,5);
        qu.connect(3,1);
        qu.connect(4,2);
        qu.connect(5,4);
        qu.connect(10,11);

        let isElementConnected = qu.isConnected(1,4);
        isElementConnected.should.be.true();
    })

    it('should #count return count of components', function () {
        let qu = new algolib.QuickUnion();

        qu.connect(3,5);
        qu.connect(3,1);
        qu.connect(4,2);
        qu.connect(5,4);
        qu.connect(10,11);

        let countOfComponents = qu.count();
        countOfComponents.should.be.eql(2);
    })

    it('should #component return value of the component', function () {
        let qu = new algolib.QuickUnion();

        qu.connect(3,6);

        let valueOfComponent = qu.component(3);
        valueOfComponent.should.be.eql(6);
    })
})



