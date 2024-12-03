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

    while (true) {
      if (temp.value === value) return this;

      if (temp.value > value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
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

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }

  preOrderDFS() {
    let result = [];

    function traverse(currentNode) {
      result.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return result;
  }
  postOrderDFS() {
    let result = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      result.push(currentNode.value);
    }
    traverse(this.root);
    return result;
  }
  inOrderDFS() {
    let result = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      result.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
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
console.log("Check 67 present or not: ", newBST.contain(67));
console.log("Check 67 present or not: ", newBST.contain(20));
console.log("Check 67 present or not: ", newBST.contain(47));
console.log("Traverse BST using BreathFirstSearch:");
console.log(newBST.BFS());
console.log("Traverse BST using PreOrder-DepthFirstSearch:");
console.log(newBST.preOrderDFS());
console.log("Traverse BST using PostOrder-DepthFirstSearch:");
console.log(newBST.postOrderDFS());
console.log("Traverse BST using InOrder-DepthFirstSearch:");
console.log(newBST.inOrderDFS());
