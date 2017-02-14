const compare = require('../tetriminos-compare');
const rotate = require('../util/rotate');

function Tetrimino(data) {
  this._data = data;
}

Tetrimino.prototype.getData = function() {
  return this._data;
}

Tetrimino.prototype.isDataEqualTo = function(another) {
  return compare(this._data, another.getData());
}

Tetrimino.prototype.rotate = function() {
  this._data = rotate(this._data, 90);
  return this;
}

module.exports = Tetrimino;
