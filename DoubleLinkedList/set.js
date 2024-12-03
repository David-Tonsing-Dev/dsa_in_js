// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoubleLinkedList {
//   constructor(value) {
//     let newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     let newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length += 1;
//     return this;
//   }

//   get(index) {
//     if (index >= this.length || !this.head) return undefined;

//     let temp = this.head;

//     if (index < this.length / 2) {
//       for (let i = 0; i < index; i++) {
//         temp = temp.next;
//       }
//     } else {
//       temp = this.tail;
//       for (let i = this.length - 1; i > index; i--) {
//         temp = temp.prev;
//       }
//     }
//     return temp.value;
//   }

//   set(index, value) {
//     if (index < 0 || index >= this.length) return undefined;

//     let temp = this.head;

//     if (index < this.length) {
//       for (let i = 0; i < index; i++) {
//         temp = temp.next;
//       }
//     } else {
//       temp = this.tail;
//       for (let i = this.length - 1; i > index; i--) {
//         temp = temp.prev;
//       }
//     }

//     temp.value = value;
//     return this;
//   }
// }

// const newDoubleLinkedList = new DoubleLinkedList(4);
// console.log(newDoubleLinkedList.push(5));
// newDoubleLinkedList.push(6);
// newDoubleLinkedList.push(7);
// newDoubleLinkedList.push(8);

// console.log("value at index 4: ");
// console.log(newDoubleLinkedList.set(3, 9));
// console.log(newDoubleLinkedList.get(3));

/// EXERCISE
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  /// WRITE SET METHOD HERE ///
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}

function test() {
  let myDLL = new DoublyLinkedList(0);
  myDLL.push(1);
  myDLL.push(2);
  myDLL.push(3);

  console.log("DLL before set():");
  myDLL.printList();

  myDLL.set(2, 99);

  console.log("\nDLL after set():");
  myDLL.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    DLL before set():
    0
    1
    2
    3

    DLL after set():
    0
    1
    99
    3

*/
