/* user code */
function answer(user) {
  let permit;

  // if (user.height > 150) permit = true;
  // else permit = false;
  
  permit = user.height >= 150;
  
  return permit;
}

/* main code */
let input = [
  // TC: 1
  { name: "john", age: 27, height: 181 },
  // TC: 2
  { name: "alice", age: 12, height: 148 },
  // TC: 3
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// #1 true
// #2 false
// #3 true