// [문제]
// 화폐단위가 50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1 로 이루어져 있다.
// 거스름돈 금액 A가 입력되었을 때, 최소한의 화폐 개수를 반환하는 함수를 작성하라.

// input: 거스름돈 금액 A

// output: 최소한의 화폐 개수

function solution(A) {
  let answer = 0;
  const money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];

  for (let i = 0; i < money.length; i++) {
    answer += Math.floor(A / money[i]);
    A %= money[i];
  }

  return answer;
}

console.log(solution(5000)); // 1
console.log(solution(12345)); // 11
