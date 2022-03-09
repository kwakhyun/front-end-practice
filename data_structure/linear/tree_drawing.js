/* user code */
function answer(height) {
  let str = "";

  for (let i = 0; i < height; i++) {
    str += "\n";
    for (let j = 0; j < height - i; j++) {
      str += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
  }

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// #1 
//    *
//   ***
//  *****
// #2 
//      *
//     ***
//    *****
//   *******
//  *********
// #3 
//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
//  *************