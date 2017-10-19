const MaxBinaryHeap = require("./maxBinaryHeap");

describe("MaxBinaryHeap", () => {
  it("should insert", () => {
    const heap = new MaxBinaryHeap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);
    heap.insert(4);
    heap.insert(5);

    expect(heap.heap).toEqual([null, 5, 4, 2, 1, 3]);
  });

  it.only("should remove", () => {
    const heap = new MaxBinaryHeap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);
    heap.insert(4);
    heap.insert(5);

    heap.deleteMax();

    expect(heap.heap).toEqual([null, 4, 3, 2, 1]);
  });
});
