const Tetrimino = require('../tetrimino');
const arrayClone = require('../../array-clone');

module.exports.get = getTetrimino;

function getTetrimino(tetriminoName, degrees) {
  const data = arrayClone(tetriminos[tetriminoName]);
  const tetriminoData = degrees ? rotate(data, degrees) : data;
  return new Tetrimino(tetriminoData);
}

function rotate(data, deg) {
  const rotations = {
    0: data => data,
    90: data => {
      const rotatedData = [ [], [], [], [], [] ];
      data.forEach(i => {
        rotatedData.forEach((val, index) => val.unshift(i[index]));
      });
      return rotatedData;
    },
    180: data => {
      const rotatedData = [];
      data.forEach(i => rotatedData.unshift(i.reverse()));
      return rotatedData;
    },
    270: data => {
      const rotatedData = [ [], [], [], [], []];
      data.forEach(i => {
        i.reverse().forEach((val, index) => { rotatedData[index].push(val); })
      });
      return rotatedData;
    }
  }

  return rotations[deg](data);
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
