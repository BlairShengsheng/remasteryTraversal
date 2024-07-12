class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert a node into the binary search tree
  insert(val) {
    const newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // pre-order traversal
  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return false;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  // in-order traversal
  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return false;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  // post-order traversal
  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return false;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }
}

// Create a new binary search tree
const bst = new BinarySearchTree();

// Insert nodes
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

// Perform pre-order traversal
console.log('Pre-Order Traversal:');
bst.preOrderTraversal();

// Perform in-order traversal
console.log('In-Order Traversal:');
bst.inOrderTraversal();

// Perform post-order traversal
console.log('Post-Order Traversal:');
bst.postOrderTraversal();
