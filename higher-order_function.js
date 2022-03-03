// sort()
let ascending_num = function (x, y) {
  return x - y;
};

let descending_num = function (x, y) {
  return y - x;
};

let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];

console.log(nums.sort(ascending_num)); // [ -1, 0, 1, 2, 3, 4, 10, 12, 20 ]
console.log(nums.sort(descending_num)); // [ 20, 12, 10, 4, 3, 2, 1, 0, -1 ]

let ascending_str = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

let descending_str = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
};

let fruits = ["apple", "orange", "Banana", "banana"];

console.log(fruits.sort(ascending_str)); // [ 'apple', 'Banana', 'banana', 'orange' ]
console.log(fruits.sort(descending_str)); // [ 'orange', 'Banana', 'banana', 'apple' ]

let ascending_order = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x > y ? 1 : -1;
};

let descending_order = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  return x < y ? 1 : -1;
};

console.log(nums.sort(ascending_order)); // [ -1, 0, 1, 2, 3, 4, 10, 12, 20 ]
console.log(nums.sort(descending_order)); // [ 20, 12, 10, 4, 3, 2, 1, 0, -1 ]
console.log(fruits.sort(ascending_order)); // [ 'apple', 'banana', 'Banana', 'orange' ]
console.log(fruits.sort(descending_order)); // [ 'orange', 'Banana', 'banana', 'apple' ]

// forEach()
let arr = [1, 2, 3];

// use for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// use forEach
arr.forEach(function (i) {
  console.log(i);
});

// map()
let arrr = [1, 2, 3, 4, 5];

// use for loop
let use_for = [];
for (let i = 0; i < arrr.length; i++) {
  use_for.push(arrr[i] * 2);
}
console.log(use_for); // [ 2, 4, 6, 8, 10 ]

// use map
let use_map = arrr.map((i) => {
  return i * 2;
});
console.log(use_map); // [ 2, 4, 6, 8, 10 ]

// find()
let users = [
  { name: "kh", age: 26, job: true },
  { name: "ys", age: 25, job: false },
  { name: "mc", age: 24, job: false },
];

let find_job = users.find((user) => {
  return user.job === false;
});
console.log(find_job); // { name: 'ys', age: 25, job: false }

let find_age = users.find((user) => {
  return user.age >= 20;
});
console.log(find_age); // { name: 'kh', age: 26, job: true }

// filter()
let filter_job = users.filter((user) => {
  return user.job === false;
});
console.log(filter_job);
// [
//   { name: 'ys', age: 25, job: false },
//   { name: 'mc', age: 24, job: false }
// ]

let filter_age = users.filter((user) => {
  return user.age >= 20;
});
console.log(filter_age);
// [
//   { name: 'kh', age: 26, job: true },
//   { name: 'ys', age: 25, job: false },
//   { name: 'mc', age: 24, job: false }
// ]

// reduce()
let num_arr = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");

let sum = num_arr.reduce((preValue, currValue, currIndex) => {
  console.log(`${preValue}\t\t${currValue}\t\t${currIndex}`);
  call_count++;
  return preValue + currValue;
}, 0); // if initialValue is not set, it starts from the first element of the array

// result	value	index
// 0      0     0
// 1		  2		  1
// 3		  3		  2
// 6		  4		  3
// 10		  5		  4

console.log(call_count); // 4
console.log(sum); // 15
