/* user code */
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

function answer(n) {
  let result = [];

  let queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.array.length != 0) {
    result.push(queue.dequeue());
    if (queue.array.length != 0) {
      queue.enqueue(queue.dequeue());
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,

  // TC: 2
  7,

  // TC: 3
  10,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [ 1, 3, 2, 4 ]
// #2 [
//   1, 3, 5, 7,
//   4, 2, 6
// ]
// #3 [
//   1, 3,  5, 7, 9,
//   2, 6, 10, 8, 4
// ]
