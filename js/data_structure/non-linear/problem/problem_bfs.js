/* user code */
function Node(x, y, count) {
  this.x = x;
  this.y = y;
  this.count = count;
}

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

function answer(input) {
  let result = -1;
  let size = input.length;
  let dir = [
    [1, 0], // 오른쪽
    [-1, 0], // 왼쪽
    [0, 1], // 아래
    [0, -1], // 위
  ];
  let map = [];

  for (let i = 0; i < size; i++) {
    // 문자열을 배열로 변환
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = Number(input[i][j]);
    }
  }

  // 시작과 끝 포인트 설정
  let start = [0, size - 1];
  let end = [size - 1, 0];
  let queue = new Queue();

  // 시작 -> Queue
  queue.enqueue(new Node(start[0], start[1], 1));

  while (!queue.isEmpty()) {
    // Queue가 비어있지 않을 동안
    let v = queue.dequeue();

    if (v.x < 0 || v.x >= size || v.y < 0 || v.y >= size) continue; // 영역 밖은 무시
    if (map[v.x][v.y]) continue; // 이미 방문한 곳이면 무시
    if (v.x === end[0] && v.y === end[1]) {
      // 끝점이면 종료
      result = v.count;
      break;
    }

    map[v.x][v.y] = 1; // 방문 처리

    for (let i = 0; i < dir.length; i++) {
      queue.enqueue(new Node(v.x + dir[i][0], v.y + dir[i][1], v.count + 1));
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  ["00110", "00010", "00110", "00000", "01011"],
  // TC: 2
  ["00110", "00010", "00110", "00010", "01011"],
  // TC: 3
  [
    "1111111100",
    "1111111101",
    "1111111101",
    "1000111101",
    "1010111101",
    "1010011101",
    "1011011101",
    "1011011101",
    "1011000001",
    "0011111111",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
