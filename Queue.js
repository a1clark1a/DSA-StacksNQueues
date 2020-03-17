//Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  /*Since we are adding items only at 1 place, the end of the queue,
     the time complexity of inserting in a queue is constant, O(1). */
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  /*Since we are removing items from only 1 place (the beginning of the queue), 
  the time complexity of removing an item from a queue is constant, O(1). */
  dequeue() {
    //if the queue is empty
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;
