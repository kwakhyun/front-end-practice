// [문제]
// M * N 크기의 배열에는 미로의 지도가 표시되어 있다.
// 1이라고 표시된 부분은 지나갈 수 있는 곳이고 0으로 표시된 부분은 지나갈 수 없는 곳이다.
// 출발 지점이 0, 0이고 도착 지점이 M-1, N-1 일때 탈출 가능 여부를 판단하는 함수를 작성하라.
// 움직일 수 있는 방향은 위, 아래, 왼쪽, 오른쪽으로 한다.

// input: 미로의 이동 가능 여부가 표시된 2차원 배열 A

// output: 탈출 가능하면 1, 불가능하면 0

function solution1(A) {
  let M = A.length;
  let N = A[0].length;
  let visited = [];
  let queue = [];
  let result = 0;

  for (let i = 0; i < M; i++) {
    visited[i] = [];
    for (let j = 0; j < N; j++) {
      visited[i][j] = 0;
    }
  }

  queue.push([0, 0]);
  visited[0][0] = 1;

  while (queue.length > 0) {
    let [x, y] = queue.shift();

    if (x === M - 1 && y === N - 1) {
      result = 1;
      break;
    }

    if (x + 1 < M && A[x + 1][y] === 1 && visited[x + 1][y] === 0) {
      queue.push([x + 1, y]);
      visited[x + 1][y] = 1;
    }

    if (x - 1 >= 0 && A[x - 1][y] === 1 && visited[x - 1][y] === 0) {
      queue.push([x - 1, y]);
      visited[x - 1][y] = 1;
    }

    if (y + 1 < N && A[x][y + 1] === 1 && visited[x][y + 1] === 0) {
      queue.push([x, y + 1]);
      visited[x][y + 1] = 1;
    }

    if (y - 1 >= 0 && A[x][y - 1] === 1 && visited[x][y - 1] === 0) {
      queue.push([x, y - 1]);
      visited[x][y - 1] = 1;
    }
  }

  return result;
}

console.log(
  solution1([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 0],
  ])
); // 0

console.log(
  solution1([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ])
); // 1

function solution2(A) {
  let N = A.length;
  let M = A[0].length;
  let visited = new Array(N).fill(0).map(() => new Array(M).fill(0));
  let queue = [[0, 0]];
  
  visited[0][0] = 1;
  while (queue.length) {
    let [x, y] = queue.shift();
    if (x === N - 1 && y === M - 1) return 1;
    if (x + 1 < N && A[x + 1][y] === 1 && visited[x + 1][y] === 0) {
      queue.push([x + 1, y]);
      visited[x + 1][y] = 1;
    }
    if (x - 1 >= 0 && A[x - 1][y] === 1 && visited[x - 1][y] === 0) {
      queue.push([x - 1, y]);
      visited[x - 1][y] = 1;
    }
    if (y + 1 < M && A[x][y + 1] === 1 && visited[x][y + 1] === 0) {
      queue.push([x, y + 1]);
      visited[x][y + 1] = 1;
    }
    if (y - 1 >= 0 && A[x][y - 1] === 1 && visited[x][y - 1] === 0) {
      queue.push([x, y - 1]);
      visited[x][y - 1] = 1;
    }
  }

  return 0;
}

console.log(
  solution2([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 0],
  ])
); // 0

console.log(
  solution2([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ])
); // 1
