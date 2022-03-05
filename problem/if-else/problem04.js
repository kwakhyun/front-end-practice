/* user code */
function answer(withdraw, total) {
  let result;

  if (withdraw % 5 == 0 && total > withdraw + 0.5) {
    result = total - withdraw - 0.5;
  } else {
    result = total;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

// #1 89.5
// #2 130
// #3 300
