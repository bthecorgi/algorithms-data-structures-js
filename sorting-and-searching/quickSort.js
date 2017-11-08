/**
 * Time: O(n log n), worst case O(n^2)
 * Space: O(log n)
 * non-stable
 *
 * @param {number[]} array
 * @return {number[]}
 */
function quickSort(array) {
  recursiveQuickSort(array, 0, array.length - 1);
  return array;
}

function recursiveQuickSort(array, l, r) {
  if (r < l) return;

  // choose last element as pivot
  let partition = computePartition(array, l, r, array[r]);
  recursiveQuickSort(array, l, partition);
  recursiveQuickSort(array, partition + 1, r);
}

function computePartition(array, l, r, pivot) {
  let wall = l;
  let current = l;

  while (current < r) {
    if (array[current] < pivot) {
      if (wall > l) {
        swap(array, wall, current);
      }

      wall++;
      current++;
    } else {
      current++;
    }
  }

  swap(array, wall, current);

  return wall;
}

function swap(array, idx1, idx2) {
  let temp = array[idx2];
  array[idx2] = array[idx1];
  array[idx1] = temp;
}

module.exports = quickSort;
