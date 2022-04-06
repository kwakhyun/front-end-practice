// [문제]
// 주어진 정수 A와 B를 2진수로 표현했을 때, A를 B로 바꾸기 위하여 뒤집어야 하는 비트의 개수를 구하는 함수를 작성하세요.

// [입력]
// 양의 정수 A, B

// [출력]
// A를 B로 바꾸기 위해 바뀌어야 하는 비트의 개수

function solution(A, B) {
    let answer = 0;
    let a = A.toString(2);
    let b = B.toString(2);

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            answer++;
        }
    }

    return answer;
}

console.log(solution(5, 7));
console.log(solution(29, 15));
