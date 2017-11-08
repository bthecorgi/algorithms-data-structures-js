const quickSort = require("./quickSort");

describe("quickSort", () => {
  test("should sort empty", () => {
    expect(quickSort([])).toEqual([]);
  });

  test("should sort one element", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  test.only("should sort 1", () => {
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("should sort 2", () => {
    expect(quickSort([2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("should sort 3", () => {
    expect(quickSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test("should sort 4", () => {
    expect(quickSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("should sort 5", () => {
    expect(quickSort([3, 1, 1])).toEqual([1, 1, 3]);
  });

  test("should sort 6", () => {
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("should sort 6", () => {
    expect(quickSort([12, 11, 13, 5, 6])).toEqual([5, 6, 11, 12, 13]);
  });
});
