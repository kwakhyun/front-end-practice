// Collection - Set
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("hello");

console.log(set); // Set(0) {}
console.log(num); // Set(5) { 1, 2, 3, 4, 5 }
console.log(str); // Set(4) { 'h', 'e', 'l', 'o' }

set.add(1).add(1).add(2).add(3);
console.log(set); // Set(3) { 1, 2, 3 }

console.log(set.has(3)); // true
console.log(set.has(4)); // false

set.delete(1); // true
set.delete(10); // false
console.log(set); // Set(2) { 2, 3 }

for (const iterator of str) {
  console.log(iterator); // h   e   l   o
}

for (const iterator of str.keys()) {
  console.log(iterator); // h   e   l   o
}

for (const iterator of str.values()) {
  console.log(iterator); // h   e   l   o
}

for (const iterator of str.entries()) {
  console.log(iterator);
}
// [ 'h', 'h' ]
// [ 'e', 'e' ]
// [ 'l', 'l' ]
// [ 'o', 'o' ]
