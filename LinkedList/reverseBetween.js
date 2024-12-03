class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // WRITE THE REVERSEBETWEEN METHOD HERE //
  reverseBetween(n, m) {
    let holdStart = null;
    let holdEnd = null;
    let start = this.head;
    let end = this.head;

    for (let i = 0; i < m; i++) {
      if (!end) return null;

      if (i < n) {
        holdStart = start;
        start = start.next;
      }
      end = end.next;
      holdEnd = end.next;
    }
    holdStart.next = null;
    end.next = null;

    let pre = null;
    let temp = start;
    let nxtTemp = start.next;

    while (temp) {
      temp.next = pre;
      pre = temp;
      temp = nxtTemp;
      if (nxtTemp) {
        nxtTemp = nxtTemp.next;
      }
    }

    holdStart.next = pre;
    start.next = holdEnd;
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
myLinkedList.push(8);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 6;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
