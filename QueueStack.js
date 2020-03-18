const Stack = require("./Stack");

class QueueStack {
  constructor() {
    this.frontStack = new Stack();
    this.endStack = new Stack();
  }

  isFrontStackEmpty() {
    if (!this.frontStack.top) {
      return true;
    }
  }

  isEndStackEmpty() {
    if (!this.endStack.top) {
      return true;
    }
  }

  /*reverseStack() {
    if (this.isFrontStackEmpty()) {
      console.log("Front stack is empty");
      return;
    }
    if (!this.isEndStackEmpty()) {
      while (!this.isEndStackEmpty()) {
        this.endStack.pop();
      }
    }

    if (this.isEndStackEmpty() && !this.isFrontStackEmpty()) {
      let tempStack = this.frontStack.top;
      while (tempStack !== null) {
        this.endStack.push(tempStack.data);
        tempStack = tempStack.next;
      }
    }

    return this.endStack;
  }*/

  /*
  reverseStack() {
    if (this.isFrontStackEmpty()) {
      console.log("Front stack is empty");
      return;
    }

    while (this.frontStack.top !== null) {
      this.endStack.push(this.frontStack.top.data);
      this.frontStack.pop();
    }
  }*/

  /*

  reverseStack(stack = this.endStack) {
    if (!this.isEndStackEmpty()) {
      let temp = stack.pop();
      this.reverseStack(stack);
      //his.addToTop(temp, stack);
    }
  }

  addToTop(temp, stack) {
    console.log("triggers");
    if (this.isEndStackEmpty()) {
      stack.push(temp);
    } else {
      let x = stack.pop();
      this.addToTop(temp, stack);
      stack.push(x);
    }
  }

  enqueue(value) {
    if (this.isFrontStackEmpty()) {
      return this.frontStack.push(value);
    }
    this.endStack.push(value);

    return;
  }

  dequeue() {
    if (this.isFrontStackEmpty()) {
      return;
    }
    console.log("dequeueing");
    this.frontStack.top.data = this.endStack.pop();
    return;
  } */

  enqueue(data) {
    if (this.isFrontStackEmpty()) {
      return this.frontStack.push(data);
    }
    //loop through the endstack then put it on the bottom of the stack
    if (this.isEndStackEmpty()) {
      return this.endStack.push(data);
    }

    while (this.endStack.top.next.next !== null) {
      this.endStack.top = this.endStack.top.next;
    }

    return (this.endStack.top.next.next.data = data);
  }

  dequeue() {}

  displayReversedStack() {
    let tempQueueNode = this.endStack.top;
    console.log("reversed stack");
    while (tempQueueNode !== null) {
      console.log(tempQueueNode.data);
      tempQueueNode = tempQueueNode.next;
    }
  }
}

module.exports = QueueStack;
