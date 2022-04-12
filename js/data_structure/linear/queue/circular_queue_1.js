// 생성자 함수
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

// 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

// 인덱스가 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

// 인덱스가 다 찼는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

let cq = new CircularQueue([1, 2, 3, 4, 5]);
console.log(cq);
// CircularQueue {
//     array: [ 1, 2, 3, 4, 5 ],
//     size: 5,
//     length: 5,
//     head: 0,
//     tail: 5
//   }
console.log(cq.isEmpty()); // false
console.log(cq.isFull()); // true

console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
// {
//     constructor: {
//       value: [Function: CircularQueue],
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
//     },
//     isFull: {
//       value: [Function (anonymous)],
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
//   }