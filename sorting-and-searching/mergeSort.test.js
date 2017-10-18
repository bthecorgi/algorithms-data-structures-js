const mergeSort = require("./mergeSort");

describe("mergeSort", () => {
  test("should sort empty", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("should sort one element", () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test("should sort 1", () => {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("should sort 2", () => {
    expect(mergeSort([2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("should sort 3", () => {
    expect(mergeSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test("should sort 4", () => {
    expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("should sort 5", () => {
    expect(mergeSort([3, 1, 1])).toEqual([1, 1, 3]);
  });

  test("should sort 6", () => {
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("should sort 6", () => {
    expect(mergeSort([12, 11, 13, 5, 6])).toEqual([5, 6, 11, 12, 13]);
  });
});
