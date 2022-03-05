/* user code */
function answer(user) {
  let reverse = [];

  for (let i = user.length - 1; i >= 0; i--) {
    reverse.push(user[i]);
  }

//   let temp;
//   for (let i = 0; i < user.length / 2; i++) {
//     temp = user[i];
//     user[i] = user[user.length - 1 - i];
//     user[user.length - 1 - i] = temp;
//   }
//   reverse = user;

  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [ 4, 3, 2, 1 ]
// #2 [ -15, 'hello', 6, -1 ]
// #3 [ 'mango', 'banana', 'apple' ]
