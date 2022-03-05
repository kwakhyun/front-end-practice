/* user code */
function answer(str) {
  let spam_flag;

  spam_flag = str.toLowerCase().includes("advert");

  return spam_flag;
}

/* main code */
let input = [
  // TC: 1
  "RE: Request documents",
  // TC: 2
  "[Advertisement] free mobile!",
  // TC: 3
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// #1 false
// #2 true
// #3 true