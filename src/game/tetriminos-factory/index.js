const Tetrimino = require('../tetrimino');
const arrayClone = require('../../array-clone');
const rotate = require('../util/rotate');

module.exports.get = getTetrimino;

function getTetrimino(tetriminoName, degrees) {
  const data = arrayClone(tetriminos[tetriminoName]);
  const tetriminoData = degrees ? rotate(data, degrees) : data;
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
