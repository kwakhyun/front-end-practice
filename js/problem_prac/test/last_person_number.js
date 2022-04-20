// [문제]
// 1번부터 N번까지의 사람이 동그랗게 모여있다.
// 1번부터 순서를 세어 K번째 사람을 모임에서 제외시킨다.
// 남은 N-1명에서 제외된 다음 사람부터 원을 따라 다시 순서를 세어
// K번째 사람을 모임에서 제외하는 과정을 마지막 사람이 남을때까지 반복한다.
// 이때 마지막으로 남는 사람의 번호를 구하는 함수를 작성하라.

// input: 참여 인원 N, 건너뛰는 횟수 K

// output: 마지막 남은 사람 번호를

function solution(N, K) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  let count = 0;
  while (arr.length > 1) {
    count++;
    if (count === K) {
      arr.shift();
      count = 0;
    } else {
      arr.push(arr.shift());
    }
  }

  return arr[0];
}

console.log(solution(5, 2)); // 3
console.log(solution(7, 3)); // 4