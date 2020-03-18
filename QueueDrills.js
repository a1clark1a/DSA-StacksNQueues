const Queue = require("./Queue");
const QueueStack = require("./QueueStack");
const QueueDouble = require("./Queue-Double");

//Queue helper functions

const isEmpty = queue => {
  if (!queue) {
    console.log("Queue is empty");
    return true;
  }
};

const display = queue => {
  if (isEmpty(queue)) {
    return;
  }
  let tempQueueNode = queue.first;
  while (tempQueueNode !== null) {
    console.log(tempQueueNode.value);
    tempQueueNode = tempQueueNode.next;
  }
};

const displayQueueStack = queue => {
  if (isEmpty(queue)) {
    return;
  }
  let tempQueueNode = queue.endStack.top;

  while (tempQueueNode !== null) {
    console.log(tempQueueNode.data);
    tempQueueNode = tempQueueNode.next;
  }
  console.log("front ", queue.frontStack.top.data);
};

const peek = queue => {
  if (isEmpty(queue)) {
    return;
  }
  return queue.first;
};

function QueueTest() {
  const starTrekQ = new Queue();

  const crews = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];
  crews.forEach(crew => {
    starTrekQ.enqueue(crew);
  });

  display(starTrekQ);

  //Removing spock
  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log(peek(starTrekQ));
}

function QueueDoubeTest() {
  const queueDouble = new QueueDouble();

  const crews = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];
  crews.forEach(crew => {
    queueDouble.enqueue(crew);
  });

  console.log("Current queue");
  display(queueDouble);
  console.log("");

  console.log("dequeueing");
  queueDouble.dequeue();
  console.log("Current queue");
  display(queueDouble);
  console.log("");

  console.log("queueing");
  queueDouble.enqueue("Clark");
  display(queueDouble);
}

QueueDoubeTest();
/*
function QueueStackTest() {
  const queueStack = new QueueStack();

  const crews = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];
  crews.forEach(crew => {
    queueStack.enqueue(crew);
  });

  displayQueueStack(queueStack);
  //   console.log("");
  //   queueStack.dequeue();
  //   displayQueueStack(queueStack);
  //   console.log("");
  //   queueStack.enqueue("test");
  //   displayQueueStack(queueStack);
  //   console.log("");
  //   queueStack.dequeue();
  //   displayQueueStack(queueStack);
  //   console.log("");
  //   queueStack.enqueue("new");
  //   displayQueueStack(queueStack);
  //   console.log("");
  //   displayQueueStack(queueStack);
}
*/
