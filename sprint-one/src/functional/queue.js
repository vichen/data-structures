var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  //array variable

  //use enqueue to push into newArray
    //return array 


  // Implement the methods below
  // Load Queue
  someInstance.enqueue = function(value) {
    storage[items] = value;
    items++;
  };

  // Unload Queue 
  someInstance.dequeue = function() {
    items--;
    var deq = storage [0];
    return deq;
    delete storage[0];
    for (var prop in storage) {
      var temp = prop - 1;
      prop = temp;
    }
    
    // check if storage[0] === empty
    
  
    // for (var prop in storage) {
    //   var temp = storage[prop];
    //   storage[prop] = storage[(prop + 1)];
    // }
  };


  someInstance.size = function() {
    return Math.max(0, items);
  };

  return someInstance;
};
