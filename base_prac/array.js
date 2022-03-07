let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1); // [ <10 empty items> ]
console.log(arr_2); // []

let fruits = ["apple", "orange", "melon"];

console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 3
console.log(fruits[0]); // apple
console.log(fruits[1]); // orange

fruits[1] = "banana";
console.log(fruits); // [ 'apple', 'banana', 'melon' ]

let nums = [];
nums[0] = "one";
nums[1] = "two";

console.log(nums.length); // 2
console.log(nums); // [ 'one', 'two' ]

nums["once"] = "once";
console.log(nums.length); // 2
console.log(nums); // [ 'one', 'two', once: 'once' ]

console.log(Object.getOwnPropertyDescriptors(nums));

let num = 123.456;
let str = "hello";

console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true

console.log(fruits); // [ 'apple', 'banana', 'melon' ]
console.log(fruits.length); // 3
// delete fruits[1];
console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ]
console.log(fruits.length); // 3

// push, pop
ret = fruits.push("orange");
console.log(fruits); // [ 'apple', 'banana', 'melon', 'orange' ]
console.log(fruits.length); // 4
console.log(ret); // 4

ret = fruits.pop();
console.log(fruits); // [ 'apple', 'banana', 'melon' ]
console.log(fruits.length); // 3
console.log(ret); // orange

// unshift, shift
ret = fruits.unshift("orange");
console.log(fruits); // [ 'orange', 'apple', 'banana', 'melon' ]
console.log(fruits.length); // 4
console.log(ret); // 4

ret = fruits.shift();
console.log(fruits); // [ 'apple', 'banana', 'melon' ]
console.log(fruits.length); // 3
console.log(ret); // orange

// splice
ret = fruits.splice(1);
console.log(ret); // [ 'banana', 'melon' ]
console.log(fruits); // [ 'apple' ]

fruits = ["apple", "banana", "melon", "orange"];
ret = fruits.splice(1, 1);
console.log(ret); // [ 'banana' ]
console.log(fruits); // [ 'apple', 'melon', 'orange' ]

ret = fruits.splice(1, 1, "mango", "kiwi");
console.log(ret); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'orange' ]

// slice
console.log(fruits.slice(1)); // [ 'mango', 'kiwi', 'orange' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'orange' ]
console.log(fruits.slice(1, 2)); // [ 'mango' ]
console.log(fruits.slice(-2)); // [ 'kiwi', 'orange' ]

// concat
let fruits_add = ["cherry", "melon"];
console.log(fruits.concat(fruits_add)); // [ 'apple', 'mango', 'kiwi', 'orange', 'cherry', 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'orange' ]

// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let x of fruits) {
  console.log(x);
}

for (let key in fruits) {
  console.log(key);
  console.log(fruits[key]);
}

// indexOf, includes
let arr_fruits = ["apple", "mango", "kiwi", "orange", "mango"];

console.log(arr_fruits.indexOf("mango")); // 1
console.log(arr_fruits.indexOf("Mango")); // -1
console.log(arr_fruits.indexOf("mango", 2)); // 4

console.log(arr_fruits.lastIndexOf("mango")); // 4
console.log(arr_fruits.lastIndexOf("mango", -2)); // 1
console.log(arr_fruits.lastIndexOf("mango", 0)); // -1

console.log(arr_fruits.includes("orange")); // true
console.log(arr_fruits.includes("banana")); // false

// sort, reverse
let arr_num = [1, -1, 4, 5, 2, 0];
console.log(arr_num); // [ 1, -1, 4, 5, 2, 0 ]
console.log(arr_num.reverse()); // [ 0, 2, 5, 4, -1, 1 ]
console.log(arr_num.sort()); // [ -1, 0, 1, 2, 4, 5 ]
console.log(arr_num.reverse()); // [ 5, 4, 2, 1, 0, -1 ]

let arr_str = ["apple", "mango", "kiwi", "orange"];
console.log(arr_str.sort()); // [ 'apple', 'kiwi', 'mango', 'orange' ]
console.log(arr_str.reverse()); // [ 'orange', 'mango', 'kiwi', 'apple' ]

// join(separator)
let str_join = fruits.join();
console.log(str_join); // apple,mango,kiwi,orange

let str_separator = fruits.join(";");
console.log(str_separator); // apple;mango;kiwi;orange

let result = str_separator.split(";");
console.log(result); // [ 'apple', 'mango', 'kiwi', 'orange' ]
