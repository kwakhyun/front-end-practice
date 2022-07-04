// 제로는 치킨과 맥주를 무척이나 좋아한다. 맥주를 즐기다 보니, 맥주잔을 예쁘게 쌓아 올리는 것에 관심이 생겼다.
// 맥주잔은 `2x1`의 크기로, 세로의 길이가 가로의 길이보다 두 배 더 길다. 하지만 맥주잔은 옆으로 놓을 경우 `1x2`로 가로로 배치할 수도 있다.
// 맥주잔의 위아래는 구분을 하지 않는다고 한다. 즉, 맥주잔을 거꾸로 놓은 것과 맥주잔을 똑바로 놓은 것은 동일하게 취급한다고 한다.
// 이 때, 맥주잔을 높이 `N`까지 `Nx2`의 직사각형 형태로 쌓아 올리는 방법의 수를 구하시오.

// ## 입력설명
// - `0 < N <= 20`

// ## 출력설명
// 방법의 수를 정수로 반환

// ## 매개변수 형식
// `N = 4`

// ## 반환값 형식
// `5`

// ## 예시 입출력 설명

// `N=4`인 경우, 아래와 같이 총 5가지 방법이 있다. 맥주잔의 위아래 구분이 없는 점에 유의.

function solution(N) {
  let res = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i * j === N) {
        res++;
      }
    }
  }

  return res;
}