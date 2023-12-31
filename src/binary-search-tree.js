const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.rooty = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.rooty ? this.rooty : null;
    // remove line with error and write your code here
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
   this.rooty = addWithin(this.rooty, data);
   function addWithin(node, value) {
    //
    if (!node) {
      return new Node(value)
    }
    if (node.data === value) {
      return node
    }
    if (value < node.data) {
      node.left = addWithin(node.left, value)
    } else { 
      node.right = addWithin(node.right, value)
    }
    return node
   }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return searchValue(this.rooty, data);
    function searchValue(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      if (value < node.data) {
        return searchValue(node.left, value)
      } else {
        return searchValue(node.right, value)
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    return findValue(this.rooty, data);
    function findValue(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
     return value < node.data ? findValue(node.left, value) : findValue(node.right, value);
    }
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');

    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};