/**
 * The root is the second item in the array. We skip the index zero cell of the array for 
 * the convenience of implementation. Consider k-th element of the array, the
 *
 * its left child is located at 2*k index 
 * its right child is located at 2*k+1. index 
 * its parent is located at k/2 index
 */
class MaxBinaryHeap {
  constructor() {
    // first spot is not used for simplicity
    this.heap = [null];
  }

  /**
   * O(log n) to insert node at the root
   * @param {string} num 
   */
  insert(num) {
    this.heap.push(num);

    let current = this.heap.length - 1;
    this.trickleUp(current);
  }

  trickleUp(current) {
    let num = this.heap[current];
    let parentPosition = Math.floor(current / 2);

    while (parentPosition > 0 && num > this.heap[parentPosition]) {
      // swap parent to the current (new) spot
      this.heap[current] = this.heap[parentPosition];
      this.heap[parentPosition] = num;
      current = parentPosition;
      parentPosition = Math.floor(parentPosition / 2);
    }
  }

  deleteMax() {
    if (this.heap === 1) {
      throw new Error("Nothing to remove");
    }

    const removed = this.heap[1];
    const last = this.heap.pop();
    this.heap[1] = last;
    this.trickleDown(1);

    return removed;
  }

  trickleDown(current) {
    while (current < this.heap.length) {
      let leftChild = current * 2;
      let rightChild = leftChild + 1;
      let num = this.heap[current];

      if (
        (num > this.heap[leftChild] && num > this.heap[rightChild]) ||
        (leftChild >= this.heap.length && num > this.heap[rightChild]) ||
        (rightChild >= this.heap.length && num > this.heap[leftChild])
      ) {
        // done trickling
        break;
      }

      if (leftChild < this.heap.length && rightChild < this.heap.length) {
        if (this.heap[leftChild] > this.heap[rightChild]) {
          current = this.moveLeftChildToCurrent(current, leftChild, num);
        } else {
          current = this.moveRightChildToCurrent(current, rightChild, num);
        }
      } else if (
        rightChild >= this.heap.length && // right child does not exist
        this.heap[leftChild] > num
      ) {
        current = this.moveLeftChildToCurrent(current, leftChild, num);
      } else if (
        leftChild >= this.heap.length && // left child does not exist
        this.heap[rightChild] > num
      ) {
        current = this.moveRightChildToCurrent(current, rightChild, num);
      }
    }
  }

  moveLeftChildToCurrent(current, leftChild, num) {
    this.heap[current] = this.heap[leftChild];
    this.heap[leftChild] = num;
    current = leftChild;
    return current;
  }

  moveRightChildToCurrent(current, rightChild, num) {
    this.heap[current] = this.heap[rightChild];
    this.heap[rightChild] = num;
    current = rightChild;
    return current;
  }
}

module.exports = MaxBinaryHeap;
