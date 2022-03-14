/* user code */
if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length === 0;
  };
}

function answer(str) {
  let result = [];

  let stack = [];
  let dish = str.split("").sort().join("");
  let dish_index = 0;

  for (let i = 0; i < str.length; i++) {
    while (stack.isEmpty() || stack.peek() < str[i]) {
      stack.push(dish[dish_index++]);
      result.push(0);
    }

    if (stack.isEmpty() || stack.peek() > str[i]) {
      return [];
    } else {
      stack.pop();
      result.push(1);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  "bacd",

  // TC: 2
  "dabc",

  // TC: 3
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [
//     0, 0, 1, 1,
//     0, 1, 0, 1
//   ]
// #2 []
// #3 [
//     0, 0, 0, 0, 0, 1, 1,
//     1, 0, 1, 0, 1, 1, 0,
//     0, 1, 0, 1, 1, 1
//   ]