// [문제 설명]
// 문자열 s가 있습니다. 이 문자열 중 중복된 글자를 제외한 문자 수를 출력하는 함수, solution을 완성해주세요.

// 예를 들어, s 'google'가 있을 때, 중복을 제외한 글자는 'g', 'o', 'l', 'e'로 결과는 4입니다.

// [입력 형식]
// - s는 길이가 100 이하의 문자열입니다.
// - s는 소문자로 구성되어 있습니다.

// [출력 형식]
// - 문자열의 중복을 제외한 글자 수를 출력합니다.

function solution(s) {
  var answer = 0;
  var arr = s.split("");

  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == i) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("google")); // 4
console.log(solution("abcde")); // 5