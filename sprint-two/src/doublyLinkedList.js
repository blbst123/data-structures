var DoublyLinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (list.head === null) {
      list.head = DoubleNode(value);
      list.tail = list.head;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
    }
  };

  list.addToHead = function (value) {
    if (list.tail === null) {
      list.tail = DoubleNode(value);
      list.head = list.tail;
    } else {
      var newNode = DoubleNode(value);
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };
  list.removeHead = function () {
    if (list.head !== null) {
      var oldHead = list.head;
      if (list.head.next !== null) {
        list.head = list.head.next;
        list.head.prev = null;
      } else {
        list.head = null;
        list.tail = null;
      }
      return oldHead.value;
    }
    return null;
  };

  list.removeTail = function () {
    if (list.tail !== null) {
      var oldTail = list.tail;
      if (list.tail.prev !== null) {
        list.tail = list.tail.prev;
        list.tail.next = null;
      } else {
        list.head = null;
        list.tail = null;
      }
      return oldTail.value;
    }
    return null;
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

var DoubleNode = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 list.addToTail O(1);
 list.removeHead O(1);
 list.contains O(n);
 */

