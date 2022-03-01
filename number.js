let n = 1e-5;

console.log(n.toString()); // 0.00001
console.log(typeof n.toString()); // string
console.log(typeof String(n)); // string
console.log(typeof (n + "")); // string

let num_1 = 123.4;
let num_2 = 123.456;

console.log(num_1 - num_2); // -0.055999999999997385
console.log((num_1 - num_2).toFixed(3)); // -0.056
console.log((num_1 - num_2).toPrecision(3)); // -0.0560

console.log(Number.isNaN(0.123)); // false
console.log(!Number.isNaN(0.123)); // true
console.log(Number.isNaN("string" / 123)); // true
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("string")); // false

console.log(Number.parseInt("10px")); // 10
console.log(parseInt("1.2px")); // 1
console.log(Number.parseFloat("1.2em")); // 1.2
console.log(typeof parseFloat("1.2em")); // number
