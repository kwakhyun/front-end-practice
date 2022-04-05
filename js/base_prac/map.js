// Map
let map = new Map();

map.set("name", "kh");
map.set(123, 456);
map.set(true, "boolean");
console.log(map); // Map(3) { 'name' => 'kh', 123 => 456, true => 'boolean' }

console.log(map.get("name")); // kh
console.log(map.get(123)); // 456
console.log(map.get(true)); // boolean
console.log(map.size); // 3

map.delete(123);
console.log(map); // Map(2) { 'name' => 'kh', true => 'boolean' }
map.clear();
console.log(map); // Map(0) {}

map.set(123, 789).set(false, "boolean").set("fruit", "banana");
console.log(map); // Map(3) { 123 => 789, false => 'boolean', 'fruit' => 'banana' }

let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (const iterator of recipe_juice.keys()) {
  console.log(iterator);
}
// strawberry
// banana
// ice
for (const iterator of recipe_juice.values()) {
  console.log(iterator);
}
// 50
// 100
// 150
for (const iterator of recipe_juice) {
  console.log(iterator);
}
// [ 'strawberry', 50 ]
// [ 'banana', 100 ]
// [ 'ice', 150 ]

console.log(recipe_juice); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }

let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj);
let recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice_obj); // { strawberry: 50, banana: 100, ice: 150 }
console.log(recipe_juice_kv); // [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]
console.log(recipe_juice_map); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
