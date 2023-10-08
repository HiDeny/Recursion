// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

const testArr = [9, 3, 7, 5, 6, 4, 8, 2];

const sort = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    if (left[0] > right[0]) result.push(right.shift());
  }

  return [...result, ...left, ...right];
};

const mergeSort = (array) => {
  if (array.length < 2) return array;
  const middle = array.length / 2;
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));
  return [...sort(left, right)];
};

console.log(mergeSort(testArr));
