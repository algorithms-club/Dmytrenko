'use strict';

const algolib = require('../index.js');

describe('#linkedList', function(){

    it('should create proper data structure ', function(){
        let li = new algolib.LinkedList();

        li.addLast.should.be.instanceOf(Function);
        li.removeLast.should.be.instanceOf(Function);
        li.get.should.be.instanceOf(Function);
    });

    it('should #addLast add element to the end of list', function(){
        let qu = new algolib.LinkedList();

        qu.addLast(1);
        qu.addLast(2);
        qu.addLast(3);

        let length = qu._length;
        length.should.be.eql(3);
    });

    it('should #removeLast remove element from the end of list', function(){
        let qu = new algolib.LinkedList();

        qu.addLast(78);
        qu.addLast(43);
        qu.addLast(10);
        qu.addLast(14);
        qu.addLast(22);
        qu.removeLast();

        let length = qu._length;
        length.should.be.eql(4);
    });

    it('should #get return element by the index of it', function(){
        let qu = new algolib.LinkedList();

        qu.addLast(10);
        qu.addLast(20);
        qu.addLast(30);
        qu.addLast(40);
        qu.addLast(50);
        qu.removeLast();

        let get = qu.get(1);
        get.should.be.eql(10);
    })

});