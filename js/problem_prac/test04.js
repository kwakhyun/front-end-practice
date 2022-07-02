// 당신은 숯불구이 전문점의 단골 손님이다. 오늘은 가게에서 특별한 이벤트를 한다고 하여, 여러 명의 친구들이 모여 함께 방문하기로 하였다.
// 가게에서는 고기의 `N`개의 부위를 부위 별로 `amount[i]` 만큼의 분량을 준비해 두었으며, 각 부위의 가격은 단위 분량 당 `value[i]`원이라고 한다.
// 이벤트에 참가한 `M`명의 친구들이 먹을 수 있는 고기의 분량을 `stomach[j]`라고 하자.
// 이 때, 친구들과 섭취한 고기의 가치가 최대가 되게 했을 때의 그 가치(원)을 구하시오.

// ## 입력설명
// - `0 < N <= 1000`
// - `0 < M <= 1000`
// - `0 < amount[i] <= 100`
// - `0 < value[i] <= 100`
// - `0 < stomach[j] <= 100`

// ## 출력설명
// 섭취 가능한 고기의 최대 가치를 정수로 반환

// ## 매개변수 형식
// `N = 4`
// `M = 5`
// `amount = [7, 10, 4, 5]`
// `value = [5, 4, 3, 1]`
// `stomach = [4, 6, 2, 5, 3]`

// ## 반환값 형식
// `74`

function solution(N, M, amount, value, stomach) {
  let items = [];
  let max = 0;

  for (let i = 0; i < N; i++) {
    items.push({
      amount: amount[i],
      value: value[i],
    });
  }

  for (let i = 0; i < M; i++) {
    let sum = 0;

    for (let j = 0; j < N; j++) {
      sum += items[j].amount * items[j].value;
    }

    if (sum > max) {
      max = sum;
    }

    for (let j = 0; j < N; j++) {
      if (items[j].amount > stomach[i]) {
        items[j].amount -= stomach[i];
      } else {
        items[j].amount = 0;
      }
    }
  }

  return max;
}

console.log(solution(4, 5, [7, 10, 4, 5], [5, 4, 3, 1], [4, 6, 2, 5, 3])); // 74
