class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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

    while (temp) {
      if (newNode === temp) return undefined;
      if (temp.value < value) {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      } else {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
    }
  }

  rContain(value, currentNode = this.root) {
    if (!currentNode) return false;

    if (currentNode.value === value) return true;

    if (currentNode.value < value) {
      return this.rContain(value, currentNode.right);
    } else {
      return this.rContain(value, currentNode.left);
    }
  }

  #rInsert(value, currentNode = this.root) {
    if (!currentNode) return new Node(value);

    if (currentNode.value < value) {
      currentNode.right = this.#rInsert(value, currentNode.right);
    } else if (currentNode.value > value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    }

    return currentNode;
  }

  rInsert(value) {
    if (!this.root) this.root = new Node(value);
    this.#rInsert(value);
  }
}

let newBST = new BST();
newBST.rInsert(2);
newBST.rInsert(1);
newBST.rInsert(3);
console.log("Check Root: ", newBST.root.value);
console.log("Check Root->left: ", newBST.root.left.value);
console.log("Check Root->right: ", newBST.root.right.value);
