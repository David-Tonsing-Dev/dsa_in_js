// Time complexity = O(n) without using memoization
// So for iterative we will use bottom-up approach
function fibonacci(n) {
  let fibArr = [];

  fibArr[0] = 0;
  fibArr[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[n];
}

console.time("a");
console.log(fibonacci(35));
console.timeEnd("a");
