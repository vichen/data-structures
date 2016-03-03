var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _(obj).extend(stackMethods);

  obj._size = 0;
  obj._storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._size++] = value;
};

stackMethods.pop = function() {
  if (this._size) {
    this._size--;
  }
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

stackMethods.size = function() {
  return this._size;
};



