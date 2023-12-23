const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
    this.top = 0;
  }
  push(element) {
    // throw new NotImplementedError('Not implemented');
    this.arr.push(element);
    // remove line with error and write your code here
  }

  pop() {
    let topElem = this.top;
    this.arr.pop(topElem);
    return topElem;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    this.top =  this.arr[this.arr.length - 1]
    return this.top;
    // remove line with error and write your code here
  }
}
const stack = new Stack();
module.exports = {
  Stack
};
