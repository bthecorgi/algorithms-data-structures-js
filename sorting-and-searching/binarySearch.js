/**
 * 
 * @param {number} needle 
 * @param {number[]} sortedHaystack 
 * @return index of found
 */
const binarySearch = (needle, sortedHaystack) => {
  let result = -1;
  let l = 0;
  let r = sortedHaystack.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (sortedHaystack[m] < needle) {
      l = m + 1;
    } else if (sortedHaystack[m] > needle) {
      r = m - 1;
    } else {
      result = m;
      break;
    }
  }

  return result;
};

module.exports = binarySearch;
