describe('doublyLinkedList', function () {
  var doublyLinkedList;

  beforeEach(function () {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function () {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "addToHead", "removeTail" and "contains"', function () {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when addToTail are added', function () {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when addToHead are added', function () {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should head.next and tail.next for 1 node list', function () {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.next).to.equal(null);
    expect(doublyLinkedList.tail.next).to.equal(null);
  });

  it('should head.prev and tail.prev for 1 node list', function () {
    // debugger;
    doublyLinkedList.addToHead(555);
    expect(doublyLinkedList.head.prev).to.equal(null);
    expect(doublyLinkedList.tail.prev).to.equal(null);
  });

  it('should remove the tail from the list when removeTail is called and tail.next is null', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.tail.next).to.equal(null);
  });

  it('should remove the head from the list when removeHead is called and head.prev is null', function () {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(4);
    expect(doublyLinkedList.head.prev).to.equal(null);
  });

  it('should return the value of the former head when removeHead is called', function () {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
    doublyLinkedList.addToHead(29);
    expect(doublyLinkedList.removeTail()).to.equal(29);
    doublyLinkedList.addToHead(15);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.removeTail()).to.equal(2);
  });

  it('should contain a value that was added', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(4)).to.equal(false);
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });

  it('should not removed more items than we add', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeTail();
    doublyLinkedList.removeHead();
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
  });


  // add more tests here to test the functionality of doublyLinkedList
});
