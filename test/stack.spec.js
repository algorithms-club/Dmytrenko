'use strict';

const algolib = require('../index.js');

describe('#stack', function(){

    it('should create proper data structure ', function(){
        let stack = new algolib.Stack();

        stack.push.should.be.instanceOf(Function);
        stack.pop.should.be.instanceOf(Function);

    });

    it('should #push return value of the last added element', function(){
        let stack = new algolib.Stack();

        stack.push(13);
        stack.push(67);
        stack.push(99);
        stack.push(100);
        stack.push(77);

        let lastAddedElementValue = stack._stack.elements.lastElement.value;
        lastAddedElementValue.should.be.eql(77);
    });

    it('should #pop remove element from the end of elements, return it and also return new last element', function(){
        let stack = new algolib.Stack();

        stack.push(78);
        stack.push(43);
        stack.push(10);
        stack.push(14);
        stack.push(22);
        stack.push(777);
        stack.push(999);

        let removedElement = stack.pop();

        removedElement.should.be.eql(999);

        let newLastElement = stack._stack.elements.lastElement.value;
        newLastElement.should.be.eql(777);
    });


    it('should return correct length after making different changes in the list and return last element after all changes', function(){
        let stack = new algolib.Stack();

        stack.push(78);
        stack.push(43);
        stack.push(10);
        stack.pop();
        stack.push(100);
        stack.push(39);
        stack.pop();
        stack.push(888);
        stack.pop();

        let length = stack._stack._length;
        length.should.be.eql(3);

        let lastAddedElementValue = stack._stack.elements.lastElement.value;
        lastAddedElementValue.should.be.eql(100);
    })

});
