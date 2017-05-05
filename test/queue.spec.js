'use strict';

const algolib = require('../index.js');

describe('#queue', function(){

    it('should create proper data structure ', function(){
        let queue = new algolib.Queue();

        queue.shift.should.be.instanceOf(Function);
        queue.pop.should.be.instanceOf(Function);

    });

    it('should #shift return value of the first added element', function(){
        let queue = new algolib.Queue();

        queue.shift(13);
        queue.shift(67);
        queue.shift(99);
        queue.shift(100);
        queue.shift(77);

        let firstAddedElementValue = queue._queue.elements.lastElement.value;
        firstAddedElementValue.should.be.eql(13);
    });

    it('should #pop remove element from the end of elements, return it and also return new last element', function(){
        let queue = new algolib.Queue();

        queue.shift(78);
        queue.shift(43);
        queue.shift(10);
        queue.shift(14);
        queue.shift(22);
        queue.shift(777);
        queue.shift(999);

        let removedElement = queue.pop();

        removedElement.should.be.eql(78);

        let newLastElement = queue._queue.elements.lastElement.value;
        newLastElement.should.be.eql(43);
    });


    it('should return correct length after making different changes in the list and return last element after all changes', function(){
        let queue = new algolib.Queue();

        queue.shift(78);
        queue.shift(43);
        queue.shift(10);
        queue.pop();
        queue.shift(100);
        queue.shift(39);
        queue.pop();
        queue.shift(888);
        queue.pop();

        let length = queue._queue._length;
        length.should.be.eql(3);

        let lastAddedElementValue = queue._queue.elements.lastElement.value;
        lastAddedElementValue.should.be.eql(100);
    })

});
