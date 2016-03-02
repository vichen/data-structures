var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.dequeue = function() {
    items--;
    return storage[0];
  };

  someInstance.size = function() {
    return Math.max(0, items);
  };

  return someInstance;
};
