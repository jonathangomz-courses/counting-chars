const countChars = require('./exercise');

describe('Some description', () => {  
  test('Should count o character', () => {
    const res = countChars("When I look to the sky", "o");
    expect(res).toBe(3);
  });
  
  test('Should count lower and uppercase', () => {
    const res = countChars("All over Again", "A");
    expect(res).toBe(3);
  });

  test('Should count special characters', () => {
    const res = countChars("H.O.L.Y", ".");
    expect(res).toBe(3);
  });
});