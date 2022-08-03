class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let curNode = this.root;
    while (curNode) {
      if (curNode.value < value) {
        if (!curNode.right) {
          curNode.right = newNode;
          break;
        }
        curNode = curNode.right;
      } else {
        if (!curNode.left) {
          curNode.left = newNode;
          break;
        }
        curNode = curNode.left;
      }
    }
  }

  has(value) {
    let curNode = this.root;

    while (curNode) {
      if (curNode.value === value) {
        return true;
      }

      if (curNode.value < value) {
        curNode = curNode.right;
      } else {
        curNode = curNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);

console.log(tree.has(8)); // true
console.log(tree.has(1)); // false
