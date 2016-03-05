// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

//{value: 5, left:{}}

var bstMethods = {
  insert: function(val) {
    if (val < this.value) {
      if (!this.left) {
        this.left = BinarySearchTree(val);
      } else {
        this.left.insert(val);
      }
    } else if (val > this.value) {
      if (!this.right) {
        this.right = BinarySearchTree(val);
      } else {
        this.right.insert(val); 
      }
    }
  },
  contains: function(val) {
    if (val === this.value) {
      return true;
    }
    var result = false;
    if (val < this.value) {
      result = this.left.contains(val);
    } else if (val > this.value) {
      result = this.right.contains(val);
    } 

  },
  depthFirstLog: function(val) {}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
