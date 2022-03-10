/* user code */
function answer(blocks) {
  let result = 0;

  let avg = 0;
  for (let i = 0; i < blocks.length; i++) {
    avg += blocks[i];
  }
  avg /= blocks.length;

  for (let i = 0; i < blocks.length; i++) {
    if (avg < blocks[i]) {
      result += blocks[i] - avg;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// #1 5
// #2 6
// #3 21