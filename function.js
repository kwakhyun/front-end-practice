function add_print(x, y) {
  console.log(x + y);
}
add_print(10, 20); // 30

function add_return(x, y) {
  return x + y;
}
let result = add_return(10, 20);
console.log(result); // 30

function check_age(age) {
  if (age >= 20) return true;
  else return false;
}
console.log(check_age(25)); // true
console.log(check_age(15)); // false

function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1);
}
console.log(recursive(3)); // 6

function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(3)); // 6

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 5, 5)); // 10
console.log(calculator(sub, 5, 5)); // 0
console.log(calculator(mul, 5, 5)); // 25
console.log(calculator(div, 5, 5)); // 1

// call by value
let a = 1;
let call_val = (b) => (b = b + 1);
call_val(a);
console.log(a); // 1

// call by reference
let aa = { value: 1 };
let call_ref = (bb) => (bb.value = bb.value + 1);
call_ref(aa);
console.log(aa.value); // 2

function max(x, y) {
  if (x > y) return x;
  else return y;
  // return x > y ? x : y;
}
console.log(max(10, 20)); // 20
console.log(max(30, 40)); // 40
console.log(max(100, 50)); // 100

function add_1(x, y) {
  return x + y;
}

const add_2 = function (x, y) {
  return x + y;
};

const add_3 = (x, y) => x + y;

const add_4 = add_1;

console.log(add_4(100, 100)); // 200
console.log(add_1 === add_4); // true
console.log(add_1 === add_2); // false

// console.log(Object.getOwnPropertyDescriptors(add_1));
// console.log(Object.getOwnPropertyDescriptors(add_2));
// console.log(Object.getOwnPropertyDescriptors(add_3));
// console.log(Object.getOwnPropertyDescriptors(add_4)); // value: 'add_1'

let list = [
  "kh",
  26,
  function hello() {
    console.log("list hello");
  },
];

let obj = {
  name: "kh",
  age: "26",
  hello() {
    console.log("obj hello");
  },
};

list[2](); // list hello
obj.hello(); // obj hello

const nice = () => console.log("nice");
const hi = () => console.log("hi");

nice(); // nice
hi(); // hi
obj.hello = nice;
obj.hello(); // nice
obj.hello = hi;
obj.hello(); // hi

let user = { name: "kwak" };
let admin = { name: "hyun" };

function hello_func() {
  console.log("hello " + this.name);
}

user.func = hello_func;
admin.func = hello_func;

user.func(); // hello kwak
admin.func(); // hello hyun
user["func"](); // hello kwak
