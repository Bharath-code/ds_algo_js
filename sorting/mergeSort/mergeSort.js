/**
 * Merge sort logic
 * Breaks arrays in half
 * Base case: when array.length is 1 (we use recursion)
 * Uses merge() to put arrays together
 * Merge sort will divide the given array to one value array recurisively
 * Then we will call merge function and combine arrays and sort them and return the final sorted array
 * Space complexity is O(n) - if array size is 8 then we divide it 8 individual array with one value in it
 * Time complexity is O(nlogn)
 *              -> Divide to individual array is O(logn) -> to divide array of 8 elements , we need 3 steps
 *              -> Combin3 them to final sorted array is O(n) -> merge()
 */

function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  const mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3, 1, 4, 2]));
