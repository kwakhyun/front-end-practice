for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0
// 1
// 2

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
}
// 0 + 0 = 0
// 0 + 1 = 1
// 0 + 2 = 2
// 1 + 0 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 0 = 2
// 2 + 1 = 3
// 2 + 2 = 4

const user = { fname: "kwak", lname: "hyun", age: 26 };
let text = "";
// For-In
for (let x in user) {
  text += user[x];
}
console.log(text);
// kwakhyun26

let username = "kwakhyun";
let text2 = "";
// For-Of
for (let x of username) {
  text2 += x;
  console.log(x);
}
console.log(text2);
// k
// w
// a
// k
// h
// y
// u
// n
// kwakhyun
