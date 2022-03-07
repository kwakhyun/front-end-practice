/* user code */
function answer(a, d, n) {
  let index = -1;

  //   for (let i = 1; a <= n; i++) {
  //     if (a === n) {
  //       index = i;
  //     }
  //     a += d;
  //   }

  if ((n - a) % d == 0) {
    index = (n - a) / d + 1;
  }

  return index;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}

// #1 4
// #2 -1
// #3 5
