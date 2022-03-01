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
