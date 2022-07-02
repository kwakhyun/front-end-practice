// 배열 `numbers`에 주어진 여러 숫자를 이용하여, 특정한 숫자 `target`을 만드려고 한다.
// 배열에 있는 숫자는 중복해서 여러번 사용할 수 있으며, 이 숫자들을 곱하거나 더해서 새로운 숫자를 만들 수 있다.
// 숫자를 조합하는 수식에는 괄호가 사용 가능하여, 예를 들어 아래와 같은 계산이 가능하다.

// `4*(2+5)+3`

// 이 때, `target`을 표현하는 데에 필요한 최소의 숫자의 개수를 구하시오.
// (단, `100`개의 숫자를 이용해도 표현할 수 없다면 `-1`을 출력하시오)

// ## 입력설명
// - `0 <= numbers[i] <= 100`
// - `1 <= numbers.length <= 100`
// - `0 <= target <= 1000000`

// ## 출력설명
// `target` 값을 표현하는 데에 필요한 최소의 숫자의 개수를 정수로 출력

// ## 매개변수 형식
// `numbers = [1, 4, 2]`
// `target = 12`

// ## 반환값 형식
// `3`

// ## 예시 입출력 설명
// `4*(2+1) = 12`로, 총 3개의 숫자를 이용하여 표현할 수 있다.

function solution(numbers, target) {
  let res = -1;
  let nums = numbers.slice();

  while (nums.length > 0) {
    let num = nums.shift();
    let tmp = target - num;

    if (tmp === 0) {
      res = nums.length + 1;
      break;
    }

    if (tmp > 0) {
      let idx = nums.indexOf(tmp);
      if (idx > -1) {
        res = nums.length - idx;
        break;
      }
    }
  }

  return res;
}

console.log(solution([1, 4, 2], 12)); // 3
