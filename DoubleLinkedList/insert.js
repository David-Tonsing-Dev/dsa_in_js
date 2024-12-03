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
    this.tail = this.head;
    this.length = 1;
  }

  print() {
    if (!this.head) return undefined;

    let temp = this.head;
    console.log("Linked length: ", this.length);
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

  pop() {
    if (!this.head) return undefined;

    let temp = this.tail;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      temp.prev = null;
      return temp;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length -= 1;
    return temp;
  }

  get(index) {
    if (index >= this.length || !this.head) return undefined;

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

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
    }
    return this;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      temp.next = null;
      this.length -= 1;
      return temp;
    }

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length -= 1;
    return temp;
  }

  insert(index, value) {
    let newNode = new Node(value);

    if (index < 0 || index > this.length) return undefined;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }

    if (index === 0) {
      this.unshift(value);
      return this;
    }

    if (index === this.length) {
      this.push(value);
      return this;
    }

    let temp = this.get(index);
    if (temp) {
      let prev = temp.prev;
      prev.next = newNode;
      temp.prev = newNode;
      newNode.prev = prev;
      newNode.next = temp;
    }
    this.length += 1;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      this.pop();
      return this;
    }

    let temp = this.get(index);
    let before = temp.prev;
    let after = temp.next;

    before.next = after;
    after.prev = before;
    temp.next = null;
    temp.prev = null;
    this.length -= 1;

    return temp;
  }
}

const newDoubleLinkedList = new DoubleLinkedList(4);
console.log(newDoubleLinkedList.push(5));
newDoubleLinkedList.push(6);
newDoubleLinkedList.push(7);
newDoubleLinkedList.push(8);

console.log("value at index 4: ");
console.log(newDoubleLinkedList.set(3, 9));
console.log(newDoubleLinkedList.get(3));
console.log(newDoubleLinkedList.insert(5, 8));
console.log("List values:");
newDoubleLinkedList.print();
console.log("Removed value: ", newDoubleLinkedList.remove(2));
newDoubleLinkedList.print();
