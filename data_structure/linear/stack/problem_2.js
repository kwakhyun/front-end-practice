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
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] == ")") {
      if (stack.isEmpty()) {
        return [];
      }

      result.push([stack.pop(), i]);
    }
  }

  if (!stack.isEmpty()) {
    return [];
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(a+b)",

  // TC: 2
  "(a*(b+c)+d)",

  // TC: 3
  "(a*(b+c)+d+(e)",

  // TC: 4
  "(a*(b+c)+d)+e)",

  // TC: 5
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [ [ 0, 4 ] ]
// #2 [ [ 3, 7 ], [ 0, 10 ] ]
// #3 []
// #4 []
// #5 [ [ 3, 7 ], [ 0, 10 ], [ 15, 19 ], [ 12, 20 ] ]