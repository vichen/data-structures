var Queue = function() {
  var newQueue = Object.create(Queue.stuff);
  newQueue.storage = {};
  newQueue.oldestIndex = 0;
  newQueue.newestIndex = 0;

  return newQueue;

};

var queueMethods = {};

var Queue.stuff = {};

Queue.stuff.enqueue = function(value) {
  this.oldestIndex++;
  this.storage[this.oldestIndex] = value;
};

Queue.stuff.dequeue = function() {
  var temp = this.storage[this.newestIndex];
  this.newestIndex++;
  return temp;
};

Queue.stuff.size = function() {
  return Math.max(0, this.oldestIndex - this.newestIndex);
};

