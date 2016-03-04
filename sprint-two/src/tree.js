var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);

  newTree.value = value;
  newTree.children = [];



  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  /*
  if (this.value === target) {
    return true;
  }
  return _.contains(this.children, target);
  */

  
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.value === target) {
      return true;
    } else {
      return this.children[i].contains(target);
    }
  }
  
  return false;
  
};


//{value: 1, children: []} --> add child 2, child 3
//{value: 1, children: [{value: 2, children: []},
// {value: 3, children[]}]}

/*
 * Complexity: What is the time complexity of the above functions?
 */
