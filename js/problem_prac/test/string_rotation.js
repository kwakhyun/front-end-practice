// [문제]
// 하나의 문자열에서 특정 지점을 쪼개 순서를 바꾸는 것을 문자열을 회전시켰다고 표현한다.
// "HelloWorld" 라는 문자열에서 "Hello", "World"를 쪼개고 회전시키면 "WorldHello"라는 문자열이 된다.
// S1, S2 두 가지 문자열이 주어졌을 때, S2가 S1을 회전시켜 나온 결과인지 판단하는 함수를 작성하라.

// input: 문자열 S1, S2

// output: 문자열 S2가 S1의 회전에 의한 결과라면 1, 아니라면 0

function solution(S1, S2) {
  S1 = S1 + S1;
  return S1.includes(S2) ? 1 : 0;
}

console.log(solution("abcd", "cdab")); // 1
console.log(solution("abcd", "abcd")); // 1
console.log(solution("abcd", "abce")); // 0
console.log(solution("HelloWorld", "WorldHello")); // 1
