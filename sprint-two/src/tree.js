var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);

  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  var helperFunc = function() {
    if (this.value === target) {
      result = true;
    }
    
    // var result = false;
    // for (var i = 0; i < this.children.length; i++) {
    //   result = this.children[i].contains(target); 
    // }
    
    // return result;
    
    // if (this.value === target) {
    //   return true;
    // }

    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        result = true;
      } else if (this.children[i].children.length > 0) {
        return this.children[i].contains(target);
      }
    }
  };

  helperFunc();
  return result;
  
};


//{value: 1, children: []} --> add child 2, child 3
//{value: 1, children: [{value: 2, children: []},
// {value: 3, children[]}]}

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1);

 */
