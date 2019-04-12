var BinarySearchTree = function (value) {
  var t = {};
  t.value = value;
  t.right = null;
  t.left = null;

  t.insert = function (v) {
    var newV = BinarySearchTree(v);
    if (v > t.value) {
      // look to the right 
      if (t.right === null) {
        t.right = newV;
      } else {
        t.right.insert(v);
      }
    } else if (v < t.value) {
      // look to the left
      if (t.left === null) {
        t.left = newV;
      } else {
        t.left.insert(v);
      }
    }
  }

  t.contains = function (target) {
    if (t.value === target) {
      return true;
    } else if (target > t.value) {
      if (t.right !== null) {
        return t.right.contains(target);
      }
      return false;
    } else {
      if (t.left !== null) {
        return t.left.contains(target);
      }
      return false;
    }
  }

  t.depthFirstLog = function (cb) {
    cb(t.value);
    if (t.left !== null) {
      t.left.depthFirstLog(cb);
    }
    if (t.right !== null) {
      t.right.depthFirstLog(cb);
    }

  }

  return t;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
