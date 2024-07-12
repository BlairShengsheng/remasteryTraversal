class TreeNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
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
    if(newNode.val < node.val){
      if(node.left === null){
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode);
      }

    }else if(newNode.val > node.val){
      if(node.right === null){
        node.right = newNode;
      }else{
        this.insertNode(node.right, newNode);
      }
    }
  }

  dftTraversal(){
    if(!this.root) return;
    const s = [this.root];

    while(s.length > 0){
      let curr = s.pop();
      console.log(curr.val);

      if(curr.right){
        s.push(curr.right);
      }
      if(curr.left){
        s.push(curr.left);
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

// Perform Depth-first traversal (level order traversal)
console.log('Depth-First Traversal:');
bst.dftTraversal();
console.log(bst);
