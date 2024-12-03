class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  getHead() {
    if (this.head === null) return console.log("No head");
    console.log("LinkedList head: ", this.head.value);
  }
  getTail() {
    if (this.tail === null) return console.log("No tail");
    console.log("LinkedList tail: ", this.tail.value);
  }
  getLength() {
    if (this.head === null) return console.log("No linkedlist");
    console.log("LinkedList length: ", this.length);
  }
  getPrint() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

function example(value) {
  let newLinkedList = new LinkedList(value);
  newLinkedList.getHead();
  newLinkedList.getTail();
  newLinkedList.getLength();
  console.log("The LinkedList:->");
  newLinkedList.getPrint();
}

example(4);
