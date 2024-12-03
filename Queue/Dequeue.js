class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length += 1;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;

    let temp = this.first;
    if (!temp.next) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    temp.next = null;
    this.length -= 1;
    return temp;
  }
}

const newQueue = new Queue(4);
newQueue.enqueue(5);
newQueue.enqueue(6);
console.log(newQueue);
newQueue.dequeue();

console.log(newQueue);
