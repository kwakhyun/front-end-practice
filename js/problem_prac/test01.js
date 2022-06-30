// 당신에게는 문자열로 이루어진 배열 `nums`와 `operations`가 주어져 있다.
// `nums` 배열에 담긴 문자열의 내용은 자연수 만으로 이루어져 있다.
// `operations` 배열은 `nums` 배열과 길이가 같으며, 이 배열의 요소는 아래 세 가지 중 하나로 이루어져 있다. 또한 각 요소가 의미하는 바는 아래와 같다.

// - `"i"`: 숫자를 1 증가시킨다.
// - `"m"`: 숫자를 2배로 증가시킨다.
// - `"d"`: 숫자를 1 감소시킨다.

// 위 `operations` 배열에 적힌 내용을 각각 `nums` 배열의 요소에 적용하여 반환하는 함수를 작성하시오.
// 단, 반환하는 배열에는 `nums`와 마찬가지로 문자열 요소가 담겨 있어야 한다.

// ## 입력설명
// - `0 < nums.length = operations.length <= 1000`

// ## 출력설명
// 문자열로 이루어진 배열을 반환

// ## 매개변수 형식
// - `nums = ["5", "2", "4", "3"]`
// - `operations = ["i", "i", "d", "m"]`

// ## 반환값 형식
// `["6", "3", "3", "6"]`

function solution(nums, operations) {
  let res = [];

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "i":
        res.push(Number(nums[i]) + 1);
        break;
      case "m":
        res.push(Number(nums[i]) * 2);
        break;
      case "d":
        res.push(Number(nums[i]) - 1);
        break;
    }
  }

  for (let i = 0; i < res.length; i++) {
    res[i] = String(res[i]);
  }

  return res;
}

console.log(solution(["5", "2", "4", "3"], ["i", "i", "d", "m"])); // [6, 3, 3, 6]
