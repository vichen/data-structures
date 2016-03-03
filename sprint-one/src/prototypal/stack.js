
var Stack = function() {
  var someStack = Object.create(stackMethods);
  someStack.index = 0;
  someStack.storage = {};

  return someStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.index++] = value;
  },

  pop: function() {
    if (this.index) {
      this.index--;
    }
    var result = this.storage[this.index];

    delete this.storage[this.index];

    return result;
  },

  size: function() {
    return this.index;
  }
};




