
var Stack = function() {
  var newStack = Object.create(Stack.stuff);
  newStack.index = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

Stack.stuff = {};

Stack.stuff.push = function(value) {
  this.storage[this.index++];
};

Stack.stuff.pop = function() {
  if (this.index) {
    this.index--;
  }
  var result = this.storage[this.index];

  delete this.storage[this.index];

  return result;
};

Stack.stuff.size = function() {
  return this.index;
};


