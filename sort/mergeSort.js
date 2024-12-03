// helper function for mergeSort
function merge(arr1, arr2) {
  let combine = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combine.push(arr1[i]);
      i++;
    } else {
      combine.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combine.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combine.push(arr2[j]);
    j++;
  }
  return combine;
}

// In mergeSort it doesn't sort the original array, instead return a new sorted array
// Space complexity: O(n) as we create a space when we break down the array
// Time complexity: when we break down its Olog(n) and when put together it took O(n)
// So O(n log n)

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

// console.log(merge([1, 4, 6], [2, 5, 9]));
console.log(mergeSort([1, 4, 6, 2, 5, 9]));
