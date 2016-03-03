var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.pop = function() {
    items--;
    return storage[items];

  };

  someInstance.size = function() {
    return Math.max(0, items);
  };

  return someInstance;
};
