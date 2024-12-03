// Pivot function is a helper function for quickSort
// We take the inital element as pivot
// Traverse through all the other element camparing the adjacent
// Swap if the first element is greater than the second element
// Once all done we swap the last smallest element with our pivot

function swap(array, firstIndex, secondIndex) {
  // helper function for pivot
  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

// Space complexity O(1), reason why its better than mergeSort
// Time complexity O(n) when are dealing with the pivot and O(log n) when we swap around the elemnts
// Which leads to O(n log n) this is the best time.
// Worst case is if all the data are sorted which will be O(n^2).
// Best for random  data which is not sorted
// Almost sorted is best in insertion sort
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

myArray = [4, 6, 1, 7, 3, 2, 5];
console.log(pivot(myArray));
console.log(myArray);
// console.log(quickSort(myArray));
