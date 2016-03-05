// An .add() method, takes any string and adds it to the set
// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
// A .remove() method, takes any string and removes it from the set, if present


var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  return item in this.storage;
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
