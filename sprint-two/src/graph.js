

// ###Graph Solution

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.count = 0;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  if (!this.contains(node)){ 
    this.count++;
    this.nodes[this.count] = new GraphNode(node);
    console.log(this.nodes);
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for(var key in this.nodes){
    if (this.nodes[key].value === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  for(var key in this.nodes){
    if (this.nodes[key].value === node) {
      return true;
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

var GraphNode = function(value) {
  this.value = value;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
