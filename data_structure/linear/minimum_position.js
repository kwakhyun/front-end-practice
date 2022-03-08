/* user code */
function answer(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      min = nums[i];
    }
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      // result.push(i);
      result[count++] = i;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [ 1, 3 ]
// #2 [ 0, 3 ]
// #3 [ 1, 2, 4 ]
