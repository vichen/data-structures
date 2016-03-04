// An .add() method, takes any string and adds it to the set
// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
// A .remove() method, takes any string and removes it from the set, if present

var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = storage;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage = [];
  this.storage = this.storage.push[item];
  
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      return true;
    }
  }
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
