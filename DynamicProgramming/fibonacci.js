/// without using memoization
/// Time complexity = O(2^n)
function fibonacci1(n) {
  if (n === 0 || n === 1) return n;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

console.time("a");
console.log("without memo", fibonacci1(35));
console.timeEnd("a");

console.log("=============================>");

/// using memoization
/// Time complexity = O(n) but nextTime = O(1)
/// Memoization cons:
// - Complex
// - memory space
// - When do with recursion or iterative it doesn't boost performace so will not used memorization
let memo = [];
function fibonacci(n) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 0 || n === 1) return n;
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

console.time("a");
console.log("with memo", fibonacci(35));
console.timeEnd("a");
