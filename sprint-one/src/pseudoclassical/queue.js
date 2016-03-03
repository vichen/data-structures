var Queue = function() {
  this.storage = {};
  this.items = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

Queue.prototype.dequeue = function() {
  var first = this.storage[0];
  this.items && this.items--;
  for (var i = 0; i < Object.keys(this.storage).length; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.items];
  return first;
};

Queue.prototype.size = function() {
  return Math.max(0, this.items);
};

var smallQueue = new Queue('a', 'b', 'c');
