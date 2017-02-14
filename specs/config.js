const config = require('../src/game/config');

describe('config object', () => {
  it('should have a board object', () => {
    expect(config.hasOwnProperty('board')).toBe(true);
  });

  it('board object should have height and width properties', () => {
    const { board } = config;
    expect(board.hasOwnProperty('height')).toBe(true);
    expect(board.hasOwnProperty('width')).toBe(true);
  });

  it("board's width and height should be numeric", () => {
    const { board } = config;
    expect(typeof(board.height)).toBe('number');
    expect(typeof(board.width)).toBe('number');
  })
})
