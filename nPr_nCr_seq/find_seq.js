/* user code */
function answer(a, b, c) {
  let number = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  //   if (num[1] - num[0] > num[2] - num[1]) {
  //     temp = num[1] - num[0];
  //     number = num[2] - temp;
  //   } else if (num[1] - num[0] < num[2] - num[1]) {
  //     temp = num[2] - num[1];
  //     number = num[0] + temp;
  //   }

  let temp = 0;
  for (let i = 1; i < num.length; i++) {
    temp += num[i] - num[i - 1];
  }
  temp /= num.length;

  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  number = num[0] + temp * index;

  return number;
}

/* main code */
let input = [
  // TC: 1
  [1, 7, 10],

  // TC: 2
  [3, 8, 18],

  // TC: 3
  [11, 2, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}

// #1 4
// #2 13
// #3 8
