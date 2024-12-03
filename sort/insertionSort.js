// It always start with the second item and compare with the before element,
// if the second is smaller than the before we interchange both
function insertionSort(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([1, 4, 5, 2, 6, 3]));
