// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 입력됩니다.

// ▣ 출력설명
// 첫 줄에 중복문자가 제거된 문자열을 출력합니다.

// ▣ 입력예제 1
// ksekkset

// ▣ 출력예제 1
// kset

function solution(s) {
  let answer = "";

  // console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}

console.log(solution("ksekkset")); // kset
console.log(solution("ababab")); // ab
