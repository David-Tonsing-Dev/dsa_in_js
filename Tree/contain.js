class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
      if (newNode === temp) return undefined;
      if (temp.value > value) {
        if (!temp.left) {
          temp.left = newNode;
          return;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return;
        }
        temp = temp.right;
      }
    }
  }

  contain(value) {
    if (!this.root) return false;

    let temp = this.root;

    while (temp) {
      if (temp.value === value) return true;

      if (temp.value > value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return false;
  }
}

const newBST = new BST();
newBST.insert(25);
newBST.insert(14);
newBST.insert(29);
newBST.insert(45);
newBST.insert(2);
console.log(newBST.contain(2));
console.log(newBST.contain(21));
console.log(newBST.contain(45));
console.log(newBST.contain(55));
