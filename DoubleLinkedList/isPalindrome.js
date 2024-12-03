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

  compare() {
    if (this.head.next === this.tail.prev) return true;
    return false;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  isPalindrome() {
    if (!this.head) return true;

    let temp = this.head;
    let reverseTemp = this.tail;

    while (
      temp !== reverseTemp &&
      temp.prev !== reverseTemp &&
      reverseTemp.next !== temp
    ) {
      if (temp.value !== reverseTemp.value) return false;

      temp = temp.next;
      reverseTemp = reverseTemp.prev;
    }
    return true;
  }
}

let dll1 = new DoubleLinkedList(7);
dll1.push(5);
dll1.push(4);
dll1.push(5);
dll1.push(7);
console.log(dll1.isPalindrome());
