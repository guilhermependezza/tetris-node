const config = require('../src/game/config');
const Board = require('../src/game/board');
const { boardConfig } = config;
let game;

beforeEach(() => { game = new Board(boardConfig); })

describe('board', () => {
  it('should have size defined by config file', () => {
    const boardSize = game.getSize();
    expect(boardSize.width).toBe(boardConfig.width);
    expect(boardSize.height).toBe(boardConfig.height);
  });

  it('should contain a 2 dimensional array to hold tetriminos data', () => {
    const boardData = game.getData();
    expect(boardData.constructor).toBe(Array);
    boardData.forEach(i => { expect(i.constructor).toBe(Array) });
  });

  it('board data should have config dimensions', () => {
    const fakeConfig = { height: 50, width: 30 };
    const fakeBoard = new Board(fakeConfig);
    const boardData = fakeBoard.getData();
    expect(boardData.length).toBe(fakeConfig.height);
    boardData.forEach(i => { expect(i.length).toBe(fakeConfig.width); });
  });

  it('initial board data should be filled with zeroes', () => {
    const boardData = game.getData();
    boardData.forEach(r => r.forEach(c => expect(c).toBe(0)));
  })
})
