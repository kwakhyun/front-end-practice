// [문제]
// 징검다리를 건너려고 한다.
// 징검다리는 한번에 1칸이나 2칸씩 건널 수 있다.
// 3개의 발판으로 이루어진 징검다리를 건너는 모든 방법은 다음과 같다.
// 1칸 + 1칸 + 1칸
// 1칸 + 2칸
// 2칸 + 1칸
// 징검다리를 건너는 모든 방법의 수를 구하는 함수를 작성하라.

// input: 징검다리의 길이 N

// output: 징검다리를 건너는 모든 방법의 수

function solution(N) {
  const dp = Array(N + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
}

console.log(solution(3)); // 3
console.log(solution(7)); // 21
