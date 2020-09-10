const countChars = require('../exercise');

describe('Tests for lowercases', () => {  
  test('Should count lower and uppercase', () => {
    const res = countChars("All over Again", "A");
    expect(res).toBe(3);
  });
});