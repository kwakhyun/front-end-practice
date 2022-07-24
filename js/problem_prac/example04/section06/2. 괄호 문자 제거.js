// 괄호 문자 제거
// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는
// 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// ▣ 출력설명
// 남은 문자만 출력한다.

// ▣ 입력예제 1
// (A(BC)D)EF(G(H)(IJ)K)LM(N)

// ▣ 출력예제 1
// EFLM

function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }

  answer = stack.join("");
  return answer;
}

let s = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(s)); // EFLM

console.log(solution("(A)B(C)")); // ABC
