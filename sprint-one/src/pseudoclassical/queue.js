var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.list = {};
};

Queue.prototype.size = function () {
  return this.count;
}

Queue.prototype.enqueue = function (value) {
  this.count++;
}

Queue.prototype.dequeue = function () {
  if (this.count > 0) {
    this.count--;
  }
}