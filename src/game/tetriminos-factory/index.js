const Tetrimino = require('../tetrimino');

function rotate(data, deg) {
  if(deg === '90') {
    const rotatedData = [ [], [], [], [], [] ];
    data.forEach(i => {
      rotatedData.forEach((val, index) => val.unshift(i[index]));
    });
    return rotatedData;
  }
}

module.exports.get = function(tetriminoName, degrees) {
  let tetriminoData;

  tetriminoData = degrees ?
    rotate(tetriminos[tetriminoName], degrees.toString()) :
    tetriminos[tetriminoName];

  return new Tetrimino(tetriminoData);
}

const tetriminos = {
  'I': [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ],

  'J': [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ],

  'L': [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ],

  'O': [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 2, 2, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],

  'S': [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 2, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],

  'T': [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 2, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ],

  'Z': [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 2, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
};
