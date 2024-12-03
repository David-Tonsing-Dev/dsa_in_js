class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    let newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length += 1;
  }

  pop() {
    if (!this.top) return undefined;

    let temp = this.top;

    this.top = this.top.next;
    temp.next = null;
    this.length -= 1;

    return temp;
  }
}

const newStack = new Stack(3);
newStack.push(4);
newStack.push(5);
console.log(newStack);
console.log(newStack.pop());
console.log(newStack);
