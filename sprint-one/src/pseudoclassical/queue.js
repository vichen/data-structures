var Queue = function() {
  this.storage = {};
  this.oldestIndex = 0;
  this.newestIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.oldestIndex++;
  this.storage[this.oldestIndex] = value;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.newestIndex];
  this.newestIndex++;
  return temp;
};

Queue.prototype.size = function() {
  return Math.max(0, this.oldestIndex - this.newestIndex);
};

var smallQueue = new Queue('a', 'b', 'c');
