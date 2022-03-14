// 생성자 함수
function Queue(array) {
  this.array = array ? array : [];
}

// getBuffer() 구현 함수
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty() 구현 함수
Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

let queue = new Queue([1, 2, 3]);
console.log(queue); // Queue { array: [ 1, 2, 3 ] }

let data = queue.getBuffer();
console.log(data); // [ 1, 2, 3 ]
console.log(data === queue.array); // false

console.log(queue.isEmpty()); // false

console.log(Object.getOwnPropertyDescriptors(Queue.prototype));
// {
//     constructor: {
//       value: [Function: Queue],
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
  