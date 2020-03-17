class _Node {
  constructor(value, prev) {
    this.value = value;
    this.next = null;
    this.prev = prev;
  }
}

class QueueDouble {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data, this.last);

    //works same as the regular queue
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (!this.first) {
      return;
    }
    //set tempNode to put first node in
    const tempNode = this.first;
    //if the tempNodes next node value is null, meaning its empty
    if (tempNode.next === null) {
      //set it the last node to null
      this.last = null;
    } else {
      //set the tempNodes, next nodes prev value into null
      tempNode.next.prev = null;
    }

    this.first = tempNode.next;
    return tempNode.value;
  }
}

module.exports = QueueDouble;
