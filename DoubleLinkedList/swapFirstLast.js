class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  print() {
    if (!this.head) return undefined;

    let temp = this.head;
    console.log("List:");
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  swapFirstLast() {
    if (!this.head) return undefined;

    if (!this.head.next) return this;

    let temp = this.head.value;
    this.head.value = this.tail.value;
    this.tail.value = temp;
    temp = null;
    return this;
  }
}

let newDoubleLinkedList = new DoubleLinkedList(7);
newDoubleLinkedList.push(8);
newDoubleLinkedList.push(9);
newDoubleLinkedList.push(10);
newDoubleLinkedList.push(11);
newDoubleLinkedList.push(12);
newDoubleLinkedList.print();
newDoubleLinkedList.swapFirstLast();
newDoubleLinkedList.print();
