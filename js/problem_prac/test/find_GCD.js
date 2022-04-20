// [문제]
// 배열 A에는 0보다 큰 숫자가 N개 들어있다.
// 모든 숫자를 아우르는 최대 공약수를 구하는 함수를 작성하라.

// input: 0보다 큰 정수가 들어있는 배열 A

// output: 배열 A의 모든 정수를 아우르는 최대 공약수

function solution(A) {
  let gcd = function (a, b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  let result = A[0];
  for (let i = 1; i < A.length; i++) {
    result = gcd(result, A[i]);
  }

  return result;
}

console.log(solution([2, 6, 8, 14])); // 2
console.log(solution([3, 6, 9, 12, 15])); // 3

