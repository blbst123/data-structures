var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function () {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function (target) {
    var currNode = list.head;

    while (currNode !== null) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 list.addToTail O(1);
 list.removeHead O(1);
 list.contains O(n);
 */

