class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    // this.count = 1; // if it can have duplicates
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode === temp) return undefined; // If the same value is passed

      if (temp.value > value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
}

let newBST = new BST();
newBST.insert(47);
newBST.insert(21);
newBST.insert(76);
newBST.insert(18);
newBST.insert(52);
newBST.insert(82);
console.log(newBST);
