//typical fibo is O(2^n) time complexity
//with memoization O(n) time complexity

const fibo = (n, memo) => {
  memo = memo || {};
  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
  return memo[n];
}

fibo(6)
