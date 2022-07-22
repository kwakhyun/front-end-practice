/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  let sub = 0;
  for (let i = 0; i < sequence.length; i++) {
    sub = sequence[i] - sequence[i + 1];
    if (sub >= 0) {
      sequence.push(sub);
    }
  }

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// #1 [ 9, 3, 6 ]
// #2 [ 6, 3, 3, 0, 3 ]
// #3 [ 13, 7, 6, 1, 5 ]