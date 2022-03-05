/* user code */
function answer(arr) {
  let new_arr = [];

  new Set(arr).forEach((item) => {
    new_arr.push(item);
  });

  // new_arr = Array.from(new Set(arr));

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// #1 [ 'john', 'alice' ]
// #2 [ 'Hello', 'hello', 'HELLO' ]
// #3 [ 'kiwi', 'banana', 'mango' ]
