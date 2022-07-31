// [문제]
// 0 ~ N 까지 수를 나열했을때 숫자 K가 몇번이나 등장하는지 확인하는 함수를 작성하라.
// K가 1인 경우 111에서는 1이 3번 등장하므로 결과에 3을 합해야 된다.

// input: 양의 정수 N, 0부터 9사이의 정수 K

// output: 0부터 N까지 K의 등장 횟수

function solution(N, K) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i <= N; i++) {
    arr.push(i);
  }

  arr.forEach((item) => {
    let temp = item.toString();
    let count = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === K.toString()) {
        count++;
      }
    }
    answer += count;
  });

  return answer;
}

console.log(solution(12, 1)); // 4
console.log(solution(25, 2)); // 9
