var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _(obj).extend(stackMethods);

  obj.index = 0;
  obj.storage = {};
  return obj;
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



