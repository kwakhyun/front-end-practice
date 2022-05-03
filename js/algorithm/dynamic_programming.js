// top-down
function fibo_top_down(n, memo = []) {
  if (n < 2) return n;
  if (memo[n]) return memo[n];

  memo[n] = fibo_top_down(n - 1) + fibo_top_down(n - 2);

  return memo[n];
}

console.log(fibo_top_down(5)); // 5
console.log(fibo_top_down(6)); // 8
console.log(fibo_top_down(7)); // 13

// bottom-up
function fibo_bottom_up(n, memo = []) {
  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

console.log(fibo_bottom_up(5)); // 5
console.log(fibo_bottom_up(6)); // 8
console.log(fibo_bottom_up(7)); // 13
