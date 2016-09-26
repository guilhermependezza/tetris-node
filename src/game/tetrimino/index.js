const compare = require('../tetriminos-compare');

function Tetrimino(data) {
  this.data = data;
}

Tetrimino.prototype.getData = function() {
  return this.data;
}

Tetrimino.prototype.isDataEqualTo = function(another) {
  return compare(this.data, another.getData());
}

module.exports = Tetrimino;
