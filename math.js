// Collection - Math
console.log(Math.max(1, -1)); // 1
console.log(Math.min(1, -1)); // -1

console.log(Math.max(1, -1, 5, 9, 7, -3)); // 9
console.log(Math.min(1, -1, 5, 9, 7, -3)); // -3

let nums = [1, -1, 5, 9, 7, -3];

// apply
console.log(Math.max(nums)); // NaN
console.log(Math.max.apply(null, nums)); // 9
console.log(Math.min.apply(null, nums)); // -3

// spread
console.log(Math.max(...nums)); // 9
console.log(Math.min(...nums)); // -3

// ABS
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs(-Infinity)); // Infinity

// property
console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

// random
console.log(Math.random()); // 0.3796014087943276
console.log(Math.random() * 10); // 8.412363987176676
console.log(Number.parseInt(Math.random() * 100)); // 39

for (let i = 0; i < 5; i++) {
  console.log(Number.parseInt(Math.random() * 100));
}
// 53
// 16
// 58
// 76
// 80

// pow
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

// sqrt
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(4)); // 2

// round, ceil, floor
console.log(Math.round(1.5)); // 2
console.log(Math.round(-1.3)); // -1
console.log(Math.round(-1.7)); // -2

console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(-1.3)); // -1
console.log(Math.ceil(-1.7)); // -1

console.log(Math.floor(1.9)); // 1
console.log(Math.floor(-1.3)); // -2
console.log(Math.floor(-1.7)); // -2