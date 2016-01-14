var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {count: 0, storage: {}}; 
  _.extend(result, queueMethods);
  
  return result;
};

var queueMethods = {
  size: function () {
    return this.count;
  },
  
  queue: function () {
    
  },
  
  dequeue: function () {
    
  }
};


