// 준식이는 자신을 포함하여 `n`명의 친구들끼리 모여 둥글게 둘러앉아 ‘죽음의 게임’을 하고 있다. 죽음의 게임의 룰은 아래와 같다.

// * 게임은 1명의 호스트와 나머지 참가자로 이루어진다.
// * 게임을 시작할 때 모든 참가자는 각자 자신을 제외한 한명을 지목한다.
// * 게임의 호스트는 한 명을 지목함과 함께 숫자 `m`을 외친다.
// * 호스트를 시작으로 총 `m`번 지목한 사람을 따라 이동한다.
// * `m`번째로 선택된 사람이 ‘죽음’ 대상이 된다.

// 준식이는 자신이 호스트일 때, 자기 자신이 죽음의 대상이 되는 모든 경로의 경우의 수를 알고싶어졌다.
// 입력받은 `n`과 `m`에 대해 준식이가 죽음의 대상이 되는 경로의 가능한 가짓수를 구하시오.
// 단, 정답 숫자 값이 너무 커질 것을 방지하기 위해 `100007`로 나눈 나머지를 반환하시오.

// ## 입력설명
// * `2 < n <= 10000`
// * `1 < m <= 1000000`

// ## 출력설명
// 모든 경로의 경우의 수 (양의 정수)

// ## 매개변수 형식
// `n = 4`
// `m = 3`

// ## 반환값 형식
// `6`

// ## 예시 입출력 설명
// * 호스트를 1로 가정할 경우, 아래와 같은 총 6가지 경로의 경우의 수가 있다.
// * `1->2->3->1`, `1->2->4->1`, `1->3->2->1`, `1->3->4->1`, `1->4->2->1`, `1->4->3->1`