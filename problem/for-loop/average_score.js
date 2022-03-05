/* user code */
function answer(score) {
  let average = 0;

  for (let i = 0; i < score.length; i++) {
    average += score[i];
  }
  
  average /= score.length;

  return average.toFixed(2);
}

/* main code */
let input = [
  // TC: 1
  [80, 95, 65, 70, 100],
  // TC: 2
  [82, 77, 51, 64, 73, 90, 80],
  // TC: 3
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// #1 82.00
// #2 73.86
// #3 81.13
