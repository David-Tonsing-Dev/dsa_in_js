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

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  reverse() {
    if (!this.head) return undefined;

    let prev = null;
    let temp = this.head;
    let nxtTemp = this.head.next;

    while (temp) {
      temp.next = prev;
      prev = temp;
      temp = nxtTemp;
      if (nxtTemp) {
        nxtTemp = nxtTemp.next;
      }
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }
}

function test(value) {
  let newLinkedList = new LinkedList(value);
  newLinkedList.push(2);
  newLinkedList.push(3);
  newLinkedList.push(4);
  console.log("The LinkedList before reverse:");
  console.log(newLinkedList);
  newLinkedList.reverse();
  console.log("The LinkedList after reverse");
  console.log(newLinkedList);
}

test(1);
