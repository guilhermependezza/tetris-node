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
  ];

  const tetriminoJ180DegClockwise = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 2, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  const tetriminoJ270DegClockwise = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 2, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
  ];

  describe('tetriminos rotation on creation', () => {
    it('should get tetriminos', () => {
      let tetrimino = tetriminosFactory.get('J');
      expect(tetrimino.isDataEqualTo(new Tetrimino(tetriminoJ))).toBe(true);
    });

    it('should get a normal tetrimino when asks for a 0 deg rotation', () => {
      let tetrimino = tetriminosFactory.get('J', 0);
      expect(tetrimino.isDataEqualTo(new Tetrimino(tetriminoJ))).toBe(true);
    });

    it('should get a tetrimino rotated 90 degrees clockwise', () => {
      let tetrimino = tetriminosFactory.get('J', 90);
      expect(tetrimino.isDataEqualTo(new Tetrimino(tetriminoJ90DegClockwise))).toBe(true);
    });

    it('should get a tetrimino rotated 180 degrees clockwise', () => {
      let tetrimino = tetriminosFactory.get('J', 180);
      expect(tetrimino.isDataEqualTo(new Tetrimino(tetriminoJ180DegClockwise))).toBe(true);
    });

    it('should get a tetrimino rotated 270 degrees clockwise', () => {
      let tetrimino = tetriminosFactory.get('J', 270);
      expect(tetrimino.isDataEqualTo(new Tetrimino(tetriminoJ270DegClockwise), true)).toBe(true)
    });
  });  
})
