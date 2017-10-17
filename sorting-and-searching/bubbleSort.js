/**
 * Time: O(n^2)
 * Space: Constant
 *
 * @param {number[]} array
 * @return {number[]}
 */
const bubbleSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
};

module.exports = bubbleSort;
