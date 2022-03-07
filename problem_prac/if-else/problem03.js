/* user code */
function answer(year) {
  let result;

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,
  // TC: 2
  100,
  // TC: 3
  124,
  // TC: 4
  247,
  // TC: 5
  400,
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// #1 true
// #2 false
// #3 true
// #4 false
// #5 true