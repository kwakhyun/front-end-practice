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

Queue.prototype.front = function () {
  return this.array[0];
};

Queue.prototype.max = function () {
  return Math.max(...this.array);
};

function answer(priorities, select) {
  let result = -1;

  let valueQ = new Queue(); // index
  let prioriQ = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    valueQ.enqueue(i);
    prioriQ.enqueue(priorities[i]);
  }

  let count = 0;
  while (true) {
    if (prioriQ.front() === prioriQ.max()) {
      count++;
      if (valueQ.front() === select) {
        result = count;
        break;
      } else {
        valueQ.dequeue();
        prioriQ.dequeue();
      }
    } else {
      valueQ.enqueue(valueQ.dequeue());
      prioriQ.enqueue(prioriQ.dequeue());
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [[3], 0],

  // TC: 2
  [[3, 4, 5, 6], 2],

  // TC: 3
  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// #1 1
// #2 2
// #3 5