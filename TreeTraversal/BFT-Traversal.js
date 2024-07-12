class TreeNode{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new TreeNode(val);
    if(this.root === null){
      this.root = newNode;
    }else{
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode){
    if(node.val < newNode.val){
      if(node.left === null){
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode);
      }

    }else if(node.val > newNode.val){
      if(node.right === null){
        node.right = newNode;
      }else{
        this.insertNode(node.right, newNode);
      }

    }
  }

  bftTraversal() {
    if(!this.root) return;

    let q = [this.root];
    while(q.length > 0){
      let curr = q.shift();
      console.log(curr.val);

      if(curr.left){
        q.push(curr.left);
      }
      if(curr.right){
        q.push(curr.right);
      }
    }
  }
}

// Example usage:
const bst = new BinarySearchTree();

// Insert nodes into the binary search tree
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

// Perform breadth-first traversal (level order traversal)
console.log('Breadth-First Traversal:');

bst.bftTraversal();
console.log(bst);
