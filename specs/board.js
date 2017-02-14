const config = require('../src/game/config');
const Board = require('../src/game/board');

describe('board', () => {
  it('should have size defined by config file', () => {
    const { boardConfig } = config;
    const game = new Board(boardConfig);
    const boardSize = game.getSize();
    expect(boardSize.width).toBe(boardConfig.width);
    expect(boardSize.height).toBe(boardConfig.height);
  })
})
