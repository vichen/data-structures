var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail && list.head === null) {
      list.head = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = function() {
    
  };

  list.contains = function(target) {
    var temp = list.head;
    var index = 0;
    while (temp.value !== target) {
      temp = temp.next;
      index++;
      if (temp === null) {
        return -1;
      }
      return index;
    }
/* 
temp = head, index = 0
while (temp.data != input)
  temp = temp.next , index++
  if temp == null
    return -1
return index;
 */
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
