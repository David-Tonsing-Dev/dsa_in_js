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

  minValue(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  #rDelete(value, currentNode) {
    if (!currentNode) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#rDelete(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#rDelete(value, currentNode.right);
    } else {
      if (!currentNode.left && !currentNode.right) {
        currentNode = null;
      } else if (!currentNode.right) {
        currentNode = currentNode.left;
      } else if (!currentNode.left) {
        currentNode = currentNode.right;
      } else {
        let subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#rDelete(subTreeMin, currentNode.right);
      }
    }

    return currentNode;
  }

  rDelete(value) {
    this.root = this.#rDelete(value, this.root);
  }
}

let newBST = new BST();
newBST.rInsert(2);
newBST.rInsert(1);
newBST.rInsert(3);
console.log("Before deleting node:");
console.log("Check Root: ", newBST.root.value);
console.log("Check Root->left: ", newBST.root.left.value);
console.log("Check Root->right: ", newBST.root.right.value);
newBST.rDelete(2);
console.log("After deleting node:");
console.log("Check Root: ", newBST.root.value);
console.log("Check Root->left: ", newBST.root.left.value);
console.log("Check Root->right: ", newBST.root.right);
