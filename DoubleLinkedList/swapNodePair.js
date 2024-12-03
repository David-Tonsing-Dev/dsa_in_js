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

  swapPair() {
    let temp = this.head;

    while (temp && temp.next) {
      let first = temp;
      let second = temp.next;

      if (first.prev) {
        first.prev.next = second;
      } else {
        this.head = second;
      }

      if (second.next) {
        second.next.prev = first;
      }

      first.next = second.next;
      second.prev = first.prev;

      second.next = first;
      first.prev = second;

      temp = first.next;
    }
  }
}

const newDoubleLinkedList = new DoubleLinkedList(7);
// newDoubleLinkedList.push(8);
// console.log("Before===============>");
// newDoubleLinkedList.print();
// newDoubleLinkedList.swapPair();
// console.log("First================>");
// newDoubleLinkedList.print();
// newDoubleLinkedList.push(9);
// newDoubleLinkedList.push(1);
// console.log("Before===============>");
// newDoubleLinkedList.print();
// newDoubleLinkedList.swapPair();
// console.log("Second================>");
// newDoubleLinkedList.print();
// newDoubleLinkedList.push(2);
// console.log("Before===============>");
// newDoubleLinkedList.print();
// newDoubleLinkedList.swapPair();
// console.log("Third================>");
// newDoubleLinkedList.print();
newDoubleLinkedList.push(1);
newDoubleLinkedList.push(2);
newDoubleLinkedList.push(3);
newDoubleLinkedList.push(4);
newDoubleLinkedList.push(5);
newDoubleLinkedList.push(6);
newDoubleLinkedList.print();
newDoubleLinkedList.swapPair();
newDoubleLinkedList.print();
