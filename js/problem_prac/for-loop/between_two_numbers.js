/* user code */
function answer(x, y) {
  let result = [];

  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
    // [x, y] = [y, x];
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// #1 [ 3, 4, 5, 6, 7 ]
// #2 [ 3, 4, 5, 6, 7, 8 ]
// #3 [ 10, 11, 12 ]
