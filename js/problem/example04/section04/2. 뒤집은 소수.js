// 뒤집은 소수
// N개의 자연수가 입력되면 각 자연수를 뒤집은 후
// 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이므로 23을 출력한다.
// 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// ▣ 입력설명
// N개의 자연수가 주어진다.
// 각 자연수의 크기는 100,000를 넘지 않는다.

// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

// ▣ 입력예제 1
// 32 55 62 20 250 370 200 30 100

// ▣ 출력예제 1
// 23 2 73 2 3

function isPrime(res) {
  if (res === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(res)); i++) {
    if (res % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // [23, 2, 73, 2, 3]

function solution2(arr) {
  let answer = [];

  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

console.log(solution2(arr)); // [23, 2, 73, 2, 3]
