let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303

console.log(array.length); // 3

let pop = array.pop();
console.log(array.length); // 2
console.log(pop); // [ 301, 302, 303 ]
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

console.log(array.length); // 2

let push = array.push([401, 402, 403]);
console.log(array.length); // 3
console.log(push); // 3
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}
// 101
// 102
// 103
// 201
// 202
// 203
// 401
// 402
// 403

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i][0], fruits[i][1]);
}
// strawberry 50
// banana 100
// ice 150