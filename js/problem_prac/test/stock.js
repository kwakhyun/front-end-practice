// [문제]
// 배열 A는 코딩주식회사의 일 단위 주식가격이 들어있다.
// 해당 주식 가격 기준으로 매수와 매도를 1회씩 진행했을 때,
// 가능한 최대 수익을 구하는 함수를 작성하라.
// 매도는 항상 매수 이후에 이루어지며, 수익을 낼 수 없는 경우 0을 리턴한다.

// input: 일 단위 주가 정보가 담긴 배열 A

// output: 최대 수익 값

function solution(A) {
  let max = 0;
  let min = 100000;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }
    if (A[i] - min > max) {
      max = A[i] - min;
    }
  }

  return max;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367])); // 356
console.log(solution([100000, 99000, 99000, 98000, 97000])); // 4
