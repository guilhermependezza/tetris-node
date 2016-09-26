describe('tetriminos', () => {
  let tetriminosFactory = require('../src/game/tetriminos-factory');
  let Tetrimino = require('../src/game/tetrimino');

  const tetriminos = {
    "J": [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  }

  it('should get tetriminos', () => {
    let tetriminoFake = new Tetrimino(tetriminos['J']);
    let tetrimino = tetriminosFactory.get('J');
    expect(tetrimino.isDataEqualTo(tetriminoFake)).toBe(true);
  });
})
