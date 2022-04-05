/* user code */
function CircularQueue(size) {
  this.array = new Array(size);
  this.size = this.array.length;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
}

CircularQueue.prototype.enqueue = function (element) {
  this.length++;
  this.array[this.tail++ % this.size] = element;
};

CircularQueue.prototype.dequeue = function () {
  this.length--;
  return this.array[this.head++ % this.size];
};

function answer(n, m, k) {
  let result = [];

  // n 만큼 세팅 (enqueue)
  let cq = new CircularQueue(n);
  for (let i = 1; i <= n; i++) {
    cq.enqueue(i);
  }

  // m 위치부터 제거하고 시작하는 위치로 설정
  cq.tail = cq.head = (n + m - 1) % n;

  // k 만큼 이동하면서 해당 번호를 제거하고 result에 제거된 번호 추가
  let count;
  result.push(cq.dequeue());
  while (cq.length != 0) {
    count = k - 1;
    while (count--) {
      cq.enqueue(cq.dequeue());
    }
    result.push(cq.dequeue());
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}

// #1 [
//   2, 5, 8, 4,
//   1, 7, 3, 6
// ]
// #2 [
//    2, 5, 8, 1, 6,
//   10, 7, 4, 9, 3
// ]
// #3 [
//    5, 12, 19,  7, 15, 3, 13,
//    2, 14,  6, 18, 11, 9,  8,
//   10, 17,  4, 16, 20, 1
// ]