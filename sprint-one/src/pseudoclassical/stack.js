var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};


Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.push = function() {
  this.count++;
}




