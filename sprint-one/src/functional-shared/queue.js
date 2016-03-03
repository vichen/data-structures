var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _(someInstance).extend(queueMethods);

  someInstance.storage = {};
  someInstance.oldestIndex = 0;
  someInstance.newestIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.oldestIndex++;
	this.storage[this.oldestIndex];
}

queueMethods.dequeue = function() {
	var temp = this.storage[this.newestIndex];
	this.newestIndex++;
	return temp;
}

queueMethods.size = function() {
	return Math.max(0,this.oldestIndex - this.newestIndex);
}
