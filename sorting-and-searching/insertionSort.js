/**
 * Time: O(n^2)
 * Space: Constant
 *
 * @param {number[]} array
 * @return {number[]}
 */
const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let element = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > element) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = element;
  }

  return array;
};

module.exports = insertionSort;
