/* user code */
function answer(nums, target) {
  // O(n^2)
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (target == nums[i] + nums[j]) {
  //         return [i, j];
  //       }
  //     }
  //   }

  // O(n)
  let map = {}; // key, value
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// #1 [ 0, 1 ]
// #2 [ 1, 2 ]
// #3 [ 0, 1 ]
