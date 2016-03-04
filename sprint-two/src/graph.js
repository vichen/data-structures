

// ------------------------
// Instantiate a new graph
var Graph = function() {

  this.storage = {};

};

//{"a": ["b", "c"], "b": ["a"], "c": ["a"], "d": []}

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  node = node + '';
  var containsNode = false;
  for (var nodeName in this.storage) {
    if (nodeName === node) {
      containsNode = true;
    }
  }
  return containsNode;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  fromNode += '';
  toNode += '';
  if (this.storage[fromNode].includes(toNode) &&
    this.storage[toNode].includes(fromNode)) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode += '';
  toNode += '';
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.storage[fromNode].indexOf(toNode);
  var toNodeIndex = this.storage[toNode].indexOf(fromNode);
  this.storage[fromNode].splice(fromNodeIndex, 1);
  this.storage[toNode].splice(toNodeIndex, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var prop in this.storage) {
    console.log('prop: ', prop);
    cb(prop);
  }
  console.log('storage: ', this.storage);
};

/* 
{{node: "a", hasNode: ["b", "c"]}, {node: "b", hasNode: ["a"]}, {node: "c", hasNode: ["a"]}}

 */


/*
 * Complexity: What is the time complexity of the above functions?
 */


