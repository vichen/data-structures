'src/functional-shared/stack.js'

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(Stack.stuff);
  newStack.index = 0;
  newStack.storage = {};

  return newStack;
};

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


