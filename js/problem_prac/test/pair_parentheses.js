// [문제]
// '('')','{''}','['']' 다음과 같은 3가지 종류의 괄호가 있다.
// 괄호들은 서로 짝이 있으며 괄호가 열리고 닫히는 것을 의미한다.
// 이때 주어진 문자열이 괄호가 서로 교차하지 않고 짝이 맞게 이루어진 문자열인지 판단하는 함수를 작성하라.

// input: 괄호로 이루어진 문자열 S

// output: 괄호가 서로 교차하지 않는 경우 1, 교차하는 경우 0

function solution(S) {
  const stack = [];
  const bracket = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < S.length; i++) {
    if (bracket[S[i]]) {
      stack.push(S[i]);
    } else {
      if (bracket[stack.pop()] !== S[i]) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("{[()()]}")); // 1
console.log(solution("{[(])}")); // 0
