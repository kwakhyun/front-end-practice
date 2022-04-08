// [문제]
// 정수 배열 A가 주어질 때 연속 합이 가장 큰 수열의 합을 반환하는 함수를 작성하라.
// 가장 큰 합이 음수인 경우 0을 반환한다.
// A가 [2, -8, 3, -2, 4, -10] 이면 3, -2, 4 의 연속 합이 5로 가장 큰 값이다.

// input: 정수 배열 A

// output: 가장 큰 연속합 또는 0

function solution(A) {
  let answer = 0;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  if (max < 0) {
    answer = 0;
  } else {
    answer = max;
  }

  return answer;
}

console.log(solution([2, -8, 3, -2, 4, -10])); // 5
console.log(solution([-1, -2, -3, -4, -5])); // 0