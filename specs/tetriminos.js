describe('tetriminos', () => {
  let tetriminosFactory = require('../src/game/tetriminos-factory');
  let Tetrimino = require('../src/game/tetrimino');

  const tetriminoJ = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  const tetriminoJ90DegClockwise = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 2, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  it('should get tetriminos', () => {
    let tetriminoFake = new Tetrimino(tetriminoJ);
    let tetrimino = tetriminosFactory.get('J');
    expect(tetrimino.isDataEqualTo(tetriminoFake)).toBe(true);
  });

  it('should get a tetrimino rotated 90 degrees clockwise', () => {
    let tetrimino = tetriminosFactory.get('J', 90);
    expect(tetrimino.isDataEqualTo(new Tetrimino(tetriminoJ90DegClockwise))).toBe(true);
  })
})
