'use strict';

const algolib = require('../index.js');

describe.only('#binarySearchTree', function () {

    it('should create proper data structure ', function () {
        let bst = new algolib.BinarySearchTree();

        bst.add.should.be.instanceOf(Function);

    });

    it('should #add push element to a BinarySearchTree and check element\'s position', function () {
        let bst = new algolib.BinarySearchTree(4);

        bst.add(3);
        bst.add(10);
        bst.add(14);
        bst.add(15);
        bst.add(12);
        bst.add(-1);
        bst._elements.right._elements.right._elements.left._elements.value.should.be.eql(12);
        bst._elements.right._elements.right._elements.right._elements.value.should.be.eql(15);
        bst._elements.left._elements.left._elements.value.should.be.eql(-1);
    });

    it('should #getMax return max element from a BinarySearchTree', function () {
        let bst = new algolib.BinarySearchTree(4);

        bst.add(3);
        bst.add(10);
        bst.add(14);
        bst.add(15);
        bst.add(12);
        bst.add(-1);
        let max = bst.getMax();
        max.should.be.eql(15);
    });

    it('should #getMax return max element from a BinarySearchTree', function () {
        let bst = new algolib.BinarySearchTree(4);

        bst.add(3);
        bst.add(10);
        bst.add(14);
        bst.add(15);
        bst.add(12);
        bst.add(-1);
        let min = bst.getMin();
        min.should.be.eql(-1);
    });

    it('should #getSize return size of a BinarySearchTree', function () {
        let bst = new algolib.BinarySearchTree(4);

        bst.add(3);
        bst.add(10);
        bst.add(14);
        bst.add(15);
        bst.add(12);
        bst.add(-1);
        let size = bst.getSize();
        size.should.be.eql(6);
    });

    it('should #getNode return node by a value from a BinarySearchTree', function () {
        let bst = new algolib.BinarySearchTree(4);

        bst.add(3);
        bst.add(10);
        bst.add(14);
        bst.add(15);
        bst.add(12);
        bst.add(-1);
        let node = bst.getNode(12);
        node.value.should.be.eql(12);
    });

    it('should #add push element to a BinarySearchTree and check element\'s position', function () {
        let bst = new algolib.BinarySearchTree(4);

        bst.add(3);
        bst.add(10);
        bst.add(14);
        bst.add(20);
        bst.add(12);
        bst.add(-1);
        bst.add(16);
        bst.add(13);
        bst.add(22);
        bst.remove(14);
        bst.remove(22);
        bst.remove(3);
        bst.add(25);

        bst._elements.right._elements.right._elements.left._elements.right._elements.right._elements.value.should.be.eql(16);
        // bst._elements.right._elements.right._elements.right._elements.value.should.be.eql(25);
        // bst._elements.left._elements.value.should.be.eql(-1);
    });

});



