// Deque(Double-ended queue) 생성자 함수
function Deque(array = []) {
  this.array = array;
}

// 객체 내 테이터 셋 반환
Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

// 데이터가 비어 있는지 확인
Deque.prototype.isEmpty = function () {
  return this.array === 0;
};

let dq = new Deque([1, 2, 3]);
console.log(dq); // Deque { array: [ 1, 2, 3 ] }

let data = dq.getBuffer();
console.log(data === dq.array); // false
console.log(data); // false

console.log(dq.isEmpty()); // [ 1, 2, 3 ]
console.log(Object.getOwnPropertyDescriptors(Deque.prototype));
// {
//     constructor: {
//       value: [Function: Deque],
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