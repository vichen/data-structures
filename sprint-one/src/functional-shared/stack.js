var Stack = function() {
  var someInstance = {};
  _(someInstance).extend(stackMethods);

  someInstance.index = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index++] = value;
};

stackMethods.pop = function() {
  if (this.index) {
    this.index--;
  }
  var result = this.storage[this.index];

  delete this.storage[this.index];

  return result;
};

stackMethods.size = function() {
  return this.index;
};



