var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var oldestIndex = 0;
  var newestIndex = 0;


  // Implement the methods below
  // Load Queue
  someInstance.enqueue = function(value) {
    storage[oldestIndex] = value;
    oldestIndex++;
  };

  // Unload Queue 
  someInstance.dequeue = function() {
    var temp = storage[newestIndex];
    newestIndex++;
    return temp;

  };


  someInstance.size = function() {
    return Math.max(0, oldestIndex - newestIndex);
  };

  return someInstance;
};
