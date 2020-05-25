const config = require('../src/game/config');

describe('config object', () => {
  it('should have a boardConfig object', () => {
    expect(config.hasOwnProperty('boardConfig')).toBe(true);
  });

  it('board object should have height and width properties', () => {
    const { boardConfig } = config;
    expect(boardConfig.hasOwnProperty('height')).toBe(true);
    expect(boardConfig.hasOwnProperty('width')).toBe(true);
  });

  it("boardConfig's width and height should be numeric", () => {
    const { boardConfig } = config;
    expect(typeof(boardConfig.height)).toBe('number');
    expect(typeof(boardConfig.width)).toBe('number');
  })
})
