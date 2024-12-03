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
newBST.insert(47);
newBST.insert(21);
newBST.insert(76);
newBST.insert(18);
newBST.insert(27);
newBST.insert(52);
newBST.insert(82);
console.log("Check BST contain 47: ", newBST.rContain(47));
console.log("Check BST contain 27: ", newBST.rContain(27));
console.log("Check BST contain 17: ", newBST.rContain(17));
