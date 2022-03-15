/* user code */
function Deque(array = []) {
  this.array = array;
}

Deque.prototype.push_front = function (element) {
  return this.array.unshift(element);
};

Deque.prototype.push_back = function (element) {
  return this.array.push(element);
};

Deque.prototype.pop_front = function () {
  let ret = this.array.shift();
  return ret === undefined ? -1 : ret;
};

Deque.prototype.pop_back = function () {
  let ret = this.array.pop();
  return ret === undefined ? -1 : ret;
};

Deque.prototype.size = function () {
  return this.array.length;
};

Deque.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
};

Deque.prototype.front = function () {
  return this.array.length === 0 ? -1 : this.array[0];
};

Deque.prototype.back = function () {
  return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
};

function answer(cmds) {
  let result = [];
  let deque = new Deque();

  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(" ")[0];

    switch (cmd) {
      case "push_front":
        deque.push_front(Number(cmds[i].split(" ")[1]));
        break;
      case "push_back":
        deque.push_back(Number(cmds[i].split(" ")[1]));
        break;
      case "pop_front":
        result.push(deque.pop_front());
        break;
      case "pop_back":
        result.push(deque.pop_back());
        break;
      case "size":
        result.push(deque.size());
        break;
      case "empty":
        result.push(deque.empty());
        break;
      case "front":
        result.push(deque.front());
        break;
      case "back":
        result.push(deque.back());
        break;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  ["push_back 1", "push_front 2", "pop_front", "pop_back", "pop_front"],

  // TC: 2
  [
    "push_back 3",
    "push_front 4",
    "push_back 5",
    "push_front 6",
    "front",
    "back",
    "pop_front",
    "size",
    "empty",
  ],

  // TC: 3
  [
    "push_back 7",
    "push_front 8",
    "front",
    "back",
    "size",
    "empty",
    "pop_front",
    "pop_back",
    "pop_front",
    "size",
    "empty",
    "pop_back",
    "push_front 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [ 2, 1, -1 ]
// #2 [ 6, 5, 6, 3, 0 ]
// #3 [
//   8,  7, 2, 0,  8,
//   7, -1, 0, 1, -1,
//   0,  9
// ]