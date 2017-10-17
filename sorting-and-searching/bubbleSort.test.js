const bubbleSort = require('./bubbleSort');

describe('bubbleSort', () => {
  test('should sort 1', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('should sort 2', () => {
    expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3]);
  });

  test('should sort 3', () => {
    expect(bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test('should sort 4', () => {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('should sort 5', () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  test('should sort 6', () => {
    expect(bubbleSort([3, 1, 1])).toEqual([1, 1, 3]);
  });
});