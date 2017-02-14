function Board({ height, width }) {
  this._height = height;
  this._width = width;
}

Board.prototype.getSize = function() {
  return {
    width: this._width,
    height: this._height
  }
}

module.exports = Board;
