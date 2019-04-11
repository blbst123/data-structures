var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }
  var isTrue = false;

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      isTrue = true;
    }
  }
  return isTrue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild O(1)
 contains O(n)
 */
