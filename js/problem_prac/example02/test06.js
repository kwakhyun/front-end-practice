// 문자열에 적용할 수 있는 연산을 아래와 같이 정의하자.

// 1. 문자열에서 모든 `'a'` 문자의 위치를 찾는다.
// 2. `'a'` 문자가 연속으로 나타난 부분을 찾아, '`a`'를 한 개로 바꾼다.
// 3. 2번에 속하지 않는 모든 `'a'` 문자의 양 옆의 문자를 `'a'`로 바꾼다.

// 예를 들면, `"abcabcaaa"`에 위 연산을 적용하면 `"aaaaaca"`가 된다.
// 문자열 `s`가 주어졌을 때, 이 문자열이 `"a"`가 될 때 까지 위 연산을 몇 번 적용해야 하는지 계산하는 함수를 구현하시오.

// ## 입력설명
// * `0 < s.length <= 10000`

// ## 매개변수 형식
// `s = "azbacefbaaaa"`

// ## 반환값 형식
// `5`

// ## 예시 입출력 설명
// 아래와 같은 과정을 거쳐서 `"a"`가 된다.
// `"azbacefbaaaa"` -> `"aaaaaefba"` -> `"aefaa"` -> `"aafa"` -> `"aaa"` -> `"a"`

function solution(s){
  let res = 0;
  let count = 0;
  let arr = s.split('');
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'a'){
      count++;
    }
    if(arr[i] === 'z'){
      count--;
    }
    res += count;
  }

  return res; 
}

console.log(solution("azbacefbaaaa"));