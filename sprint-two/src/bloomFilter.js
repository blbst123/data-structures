var BloomFilter = function () {
  var filter = {};
  filter._limit = 18;
  filter._storage = LimitedArray(filter._limit);
  filter._storage.each(function (val) {
    val = 0;
  });

  filter.insert = function (str) {
    index1 = filter.Hash1(str, filter._limit);
    index2 = filter.Hash2(str, filter._limit);
    index3 = filter.Hash3(str, filter._limit);

    filter._storage[index1] = 1;
    filter._storage[index2] = 1;
    filter._storage[index3] = 1;
  }

  filter.checkProbability = function (str) {

  }

  filter.getHashes = function (str) {
    let hashArr = [filter.Hash1, filter.Hash2, filter.Hash3].map(cb => cb(str, filter._limit));
    for (let i = 0; i < 3; i++) {
      if (filter._storage(hashArr[i]) !== 1) {
        return false;
      }
    }
    return true;
  }


  filter.Hash1 = function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 10) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }

  filter.Hash2 = function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 7) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }

  filter.Hash3 = function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  }

  return filter;
}


// simulation
// a for loop that runs 10,000 times 
// random string generated
// feed in the random string 