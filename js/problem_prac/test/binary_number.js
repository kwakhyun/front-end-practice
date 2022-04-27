// [문제]
// 자연수 n이 주어질 때 n을 이진수로 변환하여 출력하는 함수, solution을 완성하라.
// n의 값이 5 일 때, 결과는 '101'이 된다.

// input: 1 이상 100,000,000 이하의 자연수 n

// output: n을 이진수로 변환한 결과

function solution(n) {
  return n.toString(2);
}

console.log(solution(5)); // 101
console.log(solution(10)); // 1010
