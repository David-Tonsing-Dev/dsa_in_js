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

  BFS() {
    let currentNode = this.root;
    let queue = [];
    let result = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
  }
}

const newBST = new BST();
newBST.insert(47);
newBST.insert(21);
newBST.insert(76);
newBST.insert(18);
newBST.insert(27);
newBST.insert(52);
newBST.insert(82);
console.log(newBST.BFS());
