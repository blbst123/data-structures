

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    var existingBucket = this._storage.get(index)
    var indexofk = existingBucket.map(i => i[0]).indexOf(k)
    if (indexofk !== -1) {
      existingBucket[indexofk] = tuple;
    } else {
      existingBucket.push(tuple);
    }
    // this._storage.set(index, existingBucket); // this line is optional
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieveBucket = this._storage.get(index);
  for (let j = 0; j < retrieveBucket.length; j++) {
    if (retrieveBucket[j][0] === k) {
      return retrieveBucket[j][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieveBucket = this._storage.get(index);
  for (let j = 0; j < retrieveBucket.length; j++) {
    if (retrieveBucket[j][0] === k) {
      retrieveBucket.splice(j, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


