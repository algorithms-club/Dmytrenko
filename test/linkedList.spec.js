'use strict';

const algolib = require('../index.js');

describe('#linkedList', function(){

    it('should create proper data structure ', function(){
        let list = new algolib.LinkedList();

        list.addLast.should.be.instanceOf(Function);
        list.removeLast.should.be.instanceOf(Function);
        list.addFirst.should.be.instanceOf(Function);
        list.removeFirst.should.be.instanceOf(Function);
    });

    it('should #addLast return values of all added elements', function(){
        let list = new algolib.LinkedList();

        list.addLast(13);
        list.addLast(67);
        list.addLast(99);
        list.addLast(100);
        list.addLast(77);

        let lastAddedElementValue = list.elements.lastElement.value;
        lastAddedElementValue.should.be.eql(77);

        let fourthAddedElementValue = list.elements.lastElement.prev.value;
        fourthAddedElementValue.should.be.eql(100);

        let thirdAddedElementValue = list.elements.lastElement.prev.prev.value;
        thirdAddedElementValue.should.be.eql(99);

        let secondAddedElementValue = list.elements.lastElement.prev.prev.prev.value;
        secondAddedElementValue.should.be.eql(67);

        let firstAddedElementValue = list.elements.lastElement.prev.prev.prev.prev.value;
        firstAddedElementValue.should.be.eql(13);
    });

    it('should #removeLast remove element from the end of elements, return it and also return new last element', function(){
        let list = new algolib.LinkedList();

        list.addLast(78);
        list.addLast(43);
        list.addLast(10);
        list.addLast(14);
        list.addLast(22);
        list.addLast(777);
        list.addLast(999);

        let removedElement = list.removeLast();

        removedElement.should.be.eql(999);

        let newLastElement = list.elements.lastElement.value;
        newLastElement.should.be.eql(777);
    });

    it('should #addFirst return values of all added elements', function(){
        let list = new algolib.LinkedList();

        list.addFirst(10);
        list.addFirst(99);
        list.addFirst(30);
        list.addFirst(40);
        list.addFirst(50);

        let lastAddedElementValue = list.elements.firstElement.value;
        lastAddedElementValue.should.be.eql(50);

        let fourthAddedElementValue = list.elements.firstElement.next.value;
        fourthAddedElementValue.should.be.eql(40);

        let thirdAddedElementValue = list.elements.firstElement.next.next.value;
        thirdAddedElementValue.should.be.eql(30);

        let secondAddedElementValue = list.elements.firstElement.next.next.next.value;
        secondAddedElementValue.should.be.eql(99);

        let firstAddedElementValue = list.elements.firstElement.next.next.next.next.value;
        firstAddedElementValue.should.be.eql(10);
    });

    it('should #removeFirst remove element from the start of elements, return it and also return new first element', function(){
        let list = new algolib.LinkedList();

        list.addFirst(10);
        list.addFirst(99);
        list.addFirst(30);
        list.addFirst(40);
        list.addFirst(50);

        let removedElement = list.removeFirst();

        removedElement.should.be.eql(50);

        let newFirstElement = list.elements.firstElement.value;
        newFirstElement.should.be.eql(40);
    });

    it('should return correct length after making different changes in the list and return last element after all changes', function(){
        let list = new algolib.LinkedList();

        list.addLast(10);
        list.addLast(99);
        list.addLast(30);
        list.addFirst(40);
        list.addLast(50);
        list.addFirst(100);
        list.removeFirst();
        list.removeLast();
        list.removeFirst();
        list.removeLast();
        list.addFirst(22);
        list.addLast(33);
        list.removeFirst();

        let length = list._length;
        length.should.be.eql(3);

        let lastElementValue = list.elements.lastElement.value;
        lastElementValue.should.be.eql(33);

        let firstElementValue = list.elements.firstElement.value;
        firstElementValue.should.be.eql(10);

        let secondElementValue = list.elements.firstElement.next.value;
        secondElementValue.should.be.eql(99);
    })

});
