//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds all the pairs of numbers that |
//   |   sum up to a given target.                         |
//   | - One number is taken from arr1 and the other from  |
//   |   arr2.                                             |
//   |                                                     |
//   | Return type: Array of Arrays                        |
//   | - Returns an array of pairs that sum to the target. |
//   | - Each pair is an array [num1, num2].               |
//   | - Returns an empty array if no such pairs exist.    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to keep track of numbers from   |
//   |   arr1.                                             |
//   | - Then iterate through arr2 to find complementing   |
//   |   numbers.                                          |
//   +=====================================================+

function findPairs(arr1, arr2, target) {
  const newMap = new Map();
  let temp = false;

  if (arr1.length === 0 || arr2.length === 0) return [];

  for (let value of arr1) {
    newMap.set(target - value, [value]);
  }

  for (let value of arr2) {
    if (newMap.has(value)) {
      temp = true;
      newMap.get(value).push(value);
    }
  }

  if (!temp) return [];

  return Array.from(newMap.values());
}

// -------------------
// Single Pair Matching
// -------------------
console.log("Single Pair Matching:");
console.log("Input: [1, 2, 3], [4, 5, 6], 7");
console.log("Output: ", findPairs([1, 2, 3], [4, 5, 6], 7));
console.log("---------------");

// -------------------
// Multiple Pairs
// -------------------
console.log("Multiple Pairs:");
console.log("Input: [1, 2, 3], [7, 6, 5], 8");
console.log("Output: ", findPairs([1, 2, 3], [7, 6, 5], 8));
console.log("---------------");

// -------------------
// No Matching Pairs
// -------------------
console.log("No Matching Pairs:");
console.log("Input: [1, 2, 3], [7, 8, 9], 5");
console.log("Output: ", findPairs([1, 2, 3], [7, 8, 9], 5));
console.log("---------------");

// -------------------
// Empty Arrays
// -------------------
console.log("Empty Arrays:");
console.log("Input: [], [], 10");
console.log("Output: ", findPairs([], [], 10));
console.log("---------------");

// -------------------
// One Empty Array
// -------------------
console.log("One Empty Array:");
console.log("Input: [1, 2, 3], [], 4");
console.log("Output: ", findPairs([1, 2, 3], [], 4));
console.log("---------------");