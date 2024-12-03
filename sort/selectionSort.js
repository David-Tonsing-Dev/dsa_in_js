// Using index value we switch the elements,
// we travserse through the array and store the min value index and
// once we reach the last element we switch to the current value with the min index value
// where current value is the pointer which have to be sorted
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

console.log(selectionSort([4, 2, 6, 5, 1, 3]));
