var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;
<<<<<<< HEAD

  //array variable

  //use enqueue to push into newArray
    //return array 
=======
>>>>>>> 7197b0082321b408ef97e01f7a700155c7a58745


  // Implement the methods below
  // Load Queue
  someInstance.enqueue = function(value) {
    storage[items] = value;
    items++;
  };

  // Unload Queue 
  someInstance.dequeue = function() {
    items--;
<<<<<<< HEAD
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
=======
    return storage[0];
>>>>>>> 7197b0082321b408ef97e01f7a700155c7a58745
  };


  someInstance.size = function() {
    return Math.max(0, items);
  };

  return someInstance;
};
