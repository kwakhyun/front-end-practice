console.log("line\nfeed");
// line
// feed
console.log("line\rfeed");
// line
// feed
console.log("line\\feed"); // line\feed
console.log("line\teed"); // line	eed
console.log("line\u{1F600}feed"); // line😀feed

let str = `Hello
world
!!!`;

let newline_str = "hello\nworld\n!!!";

console.log(str.length); // 15
console.log(newline_str.length); // 15

console.log(str.charAt(0)); // h
console.log(str.charCodeAt(0)); // 104
console.log(str[0]); // h

console.log(str.indexOf("l")); // 2
console.log(str.indexOf("l", 3)); // 3
console.log(str.lastIndexOf("l")); // 9

console.log(str.includes("hello")); // false
console.log(str.includes("Hello")); // true
console.log(str.startsWith("ello")); // false
console.log(str.startsWith("ello", 1)); // true
console.log(str.endsWith("world")); // false
console.log(str.endsWith("!")); // true

console.log(str.toUpperCase());
// HELLO
// WORLD
// !!!
console.log(str.toLowerCase());
// hello
// world
// !!!

let text = "HelLo, JS!!";
let changed_text = "";

changed_text = text.replace("HelLo", "Hi");
console.log(changed_text); // Hi, JS!!

console.log(text.replace("!", "?")); // HelLo, JS?!
console.log(text.replace("l", "i")); // HeiLo, JS!!
console.log(text.replace(/l/g, "i")); // HeiLo, JS!!
console.log(text.replace(/l/gi, "i")); // Heiio, JS!!

let slice_str = "slice test";

console.log(slice_str.slice(0, 5)); // slice
console.log(slice_str.slice(4, 5)); // e
console.log(slice_str.slice(4)); // e test
console.log(slice_str.slice(-4)); // test

console.log(slice_str.slice(2, 6)); // ice
console.log(slice_str.slice(6, 2)); //
console.log(slice_str.substring(2, 6)); // ice
console.log(slice_str.substring(6, 2)); // ice

let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result); // [ 'apple', 'banana', 'melon' ]
console.log(result[0]); // apple
console.log(result[1]); // banana
console.log(result[2]); // melon

let split_str = "split";

result = split_str.split("");
console.log(result); // [ 's', 'p', 'l', 'i', 't' ]
console.log(result.length); // 5

result = split_str.split("", 3);
console.log(result); // [ 's', 'p', 'l' ]
console.log(result.length); // 3
