var Queue = function() {
  var newQueue = {};
  newQueue.items = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  for (var i = this.items; i > 0; i--) {
    this[i] = this[i - 1];
  }

  this[0] = value;
  this.items++;
};

queueMethods.dequeue = function(value) {
  if (this.items > 0) {
    var temp = this[this.items - 1];

    delete this[this.items - 1];
    this.items--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.items;
};
