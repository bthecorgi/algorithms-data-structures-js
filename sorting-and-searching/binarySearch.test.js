const binarySearch = require('./binarySearch');

describe('binarySearch', () => {
  test('should find 1', () => {
    expect(binarySearch(1, [1, 2, 3])).toBe(0);
  });

  test('should find 2', () => {
    expect(binarySearch(2, [1, 2, 3])).toBe(1);
  });

  test('should find 3', () => {
    expect(binarySearch(3, [1, 2, 3])).toBe(2);
  });

  test('should not find 4', () => {
    expect(binarySearch(4, [1, 2, 3])).toBe(-1);
  });

  test('should not find 89', () => {
    expect(binarySearch(89, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
      41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])).toBe(23);
  });
});