/**
 * Time: O(n log n)
 * Space: O(n)
 *
 * @param {number[]} array
 * @return {number[]}
 */
const mergeSort = array => {
  let helper = new Array(array.length);
  mergeSortRecursion(array, helper, 0, array.length - 1);
  return array;
};

const mergeSortRecursion = (array, helper, l, r) => {
  if (r <= l) {
    return;
  }

  let m = Math.floor((l + r) / 2);
  mergeSortRecursion(array, helper, l, m);
  mergeSortRecursion(array, helper, m + 1, r);
  merge(array, helper, l, m, r);
};

const merge = (array, helper, l, m, r) => {
  // copy to helper
  for (let i = l; i <= r; i++) {
    helper[i] = array[i];
  }

  let helperL = l;
  let helperR = m + 1;
  let current = l;

  while (helperL <= m && helperR <= r) {
    if (helper[helperL] < helper[helperR]) {
      array[current] = helper[helperL];
      helperL++;
    } else {
      array[current] = helper[helperR];
      helperR++;
    }

    current++;
  }

  while (helperL <= m) {
    array[current] = helper[helperL];
    current++;
    helperL++;
  }

  while (helperR <= r) {
    array[current] = helper[helperR];
    current++;
    helperR++;
  }
};

module.exports = mergeSort;
