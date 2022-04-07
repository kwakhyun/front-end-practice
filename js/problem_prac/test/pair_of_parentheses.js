// 총 4가지 종류의 괄호가 있다.
// 괄호들은 서로 짝이 있으며 괄호가 열리고 닫히는 것을 의미한다.
// '('')','{''}','['']','<''>'
// 입력 : 괄호로 이루어진 문자열 S
// 출력 : 괄호가 서로 교차하지 않는 경우 true, 교차하는 경우 false

function solution(S) {
  const stack = [];
  const bracket = {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">",
  };

  for (let i = 0; i < S.length; i++) {
    if (bracket[S[i]]) {
      stack.push(S[i]);
    } else {
      if (bracket[stack.pop()] !== S[i]) {
        return false;
      }
    }
  }
}

console.log(solution("{[()()]}")); // true
