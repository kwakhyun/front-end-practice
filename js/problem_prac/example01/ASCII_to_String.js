// [문제]
// n개의 ASCII Code 배열 arr가 있다.
// ASCII Code를 문자열로 반환하는 함수, solution을 완성하라.
// arr [71, 111, 111, 103, 108, 101]가 있을 때,
// ASCII Code를 문자열로 치환한 결과는 "Google"이 된다.

// input: 대/소문자의 ASCII Code로 구성되어 있는 배열 arr

// output: ASCII Code를 문자열로 변환한 결과

function solution(arr) {
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    answer += String.fromCharCode(arr[i]);
  }

  return answer;
}

console.log(solution([71, 111, 111, 103, 108, 101])); // Google
console.log(solution([97, 98, 99, 100, 101, 102])); // abcdef
