/* user code */
function answer(length) {
  let result = [];

  for (let i = 0; i < length; i++) {
    result[i] = [];
  }

  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;
  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }
    length--;

    if (length == 0) break;

    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [
//   [ 1, 2, 3, 4 ],
//   [ 12, 13, 14, 5 ],
//   [ 11, 16, 15, 6 ],
//   [ 10, 9, 8, 7 ]
// ]
// #2 [
//   [ 1, 2, 3, 4, 5 ],
//   [ 16, 17, 18, 19, 6 ],
//   [ 15, 24, 25, 20, 7 ],
//   [ 14, 23, 22, 21, 8 ],
//   [ 13, 12, 11, 10, 9 ]
// ]
// #3 [
//   [ 1, 2, 3, 4, 5, 6 ],
//   [ 20, 21, 22, 23, 24, 7 ],
//   [ 19, 32, 33, 34, 25, 8 ],
//   [ 18, 31, 36, 35, 26, 9 ],
//   [ 17, 30, 29, 28, 27, 10 ],
//   [ 16, 15, 14, 13, 12, 11 ]
// ]