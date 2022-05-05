// [문제]
// 문자열 S는 하나의 단어를 나타낸다.
// 단어를 거꾸로 뒤집어도 똑같은 것을 회문(palindrome)이라고 한다.
// 주어진 단어가 회문인 경우 1, 아닌 경우 0을 반환하는 함수를 작성하라.

// input: 알파벳 대문자로 이루어진 문자열 S

// output: 회문인 경우 1, 아닌 경우 0

function solution(S) {
  let str = S.split("");
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return 0;
    }
    i++;
    j--;
  }

  return 1;
}

console.log(solution("TACOCAT")); // 1
console.log(solution("JAVASCRIPT")); // 0
