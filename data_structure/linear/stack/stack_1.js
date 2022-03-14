// 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer() 구현 함수
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() 구현 함수
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

let stack = new Stack([1, 2, 3]);
console.log(stack); // Stack { array: [ 1, 2, 3 ] }

let data = stack.getBuffer();
console.log(data); // [ 1, 2, 3 ]
console.log(data === stack.array); // false

console.log(stack.isEmpty()); // false

console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
// {
//     constructor: {
//       value: [Function: Stack],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     },
//     getBuffer: {
//       value: [Function (anonymous)],
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     isEmpty: {
//       value: [Function (anonymous)],
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
//   }