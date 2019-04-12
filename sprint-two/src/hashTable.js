

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._kList.push(k)
  if (!this._kList.includes(k) && this._storage[index] != undefined) {
    // handle functional conflict 
  } else {
    // set the index'th position of the storage array to v 
    this._storage.set(index, v);
  }


};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieveItem = this._storage.get(index);
  return retrieveItem;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


