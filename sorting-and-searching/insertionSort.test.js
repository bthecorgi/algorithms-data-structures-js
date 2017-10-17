const insertionSort = require("./insertionSort");

describe("insertionSort", () => {
  test("should sort empty", () => {
    expect(insertionSort([])).toEqual([]);
  });

  test("should sort one element", () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  test("should sort 1", () => {
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("should sort 2", () => {
    expect(insertionSort([2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("should sort 3", () => {
    expect(insertionSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test("should sort 4", () => {
    expect(insertionSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("should sort 5", () => {
    expect(insertionSort([3, 1, 1])).toEqual([1, 1, 3]);
  });

  test("should sort 6", () => {
    expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("should sort 6", () => {
    expect(insertionSort([12, 11, 13, 5, 6])).toEqual([5, 6, 11, 12, 13]);
  });
});
