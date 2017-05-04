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
        let ll = new algolib.LinkedList();

        ll.addLast(1);
        ll.addLast(2);
        ll.addLast(3);

        let length = ll._length;
        length.should.be.eql(3);
    });

    it('should #removeLast remove element from the end of list', function(){
        let ll = new algolib.LinkedList();

        ll.addLast(78);
        ll.addLast(43);
        ll.addLast(10);
        ll.addLast(14);
        ll.addLast(22);
        ll.removeLast();

        let length = ll._length;
        length.should.be.eql(4);
    });

    it('should #get return element by the index of it', function(){
        let ll = new algolib.LinkedList();

        ll.addLast(10);
        ll.addLast(20);
        ll.addLast(30);
        ll.addLast(40);
        ll.addLast(50);
        ll.removeLast();

        let get = ll.get(1);
        get.should.be.eql(10);
    })

});