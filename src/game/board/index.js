function Board({ height, width }) {
  this._height = height;
  this._width = width;
  this._data = generateInitialData(height, width);
}

Board.prototype.getSize = function() {
  return {
    width: this._width,
    height: this._height
  }
};

Board.prototype.getData = function () {
  return this._data;
}

function generateInitialData(height, width) {
  const initialData = [];
  const rowData = [];
  for(let i = 0; i < width; i++) rowData.push(0);
  for(let i = 0; i < height; i++) initialData.push([].concat(rowData));
  return initialData;
}

module.exports = Board;
