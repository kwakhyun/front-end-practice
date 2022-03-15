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

// 데이터가 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

// 데이터가 꽉 찼는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

// 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail % this.size] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;

  return true;
};

// 데이터 삭제
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  this.head = (this.head + 1) % this.size;
  this.length--;

  return element;
};

let cq = new CircularQueue([1, 2, 3, 4]);

console.log(cq.enqueue(5)); // true
console.log(cq.enqueue(6)); // false
console.log(cq);
// CircularQueue {
//   array: [ 1, 2, 3, 4, 5 ],
//   size: 5,
//   length: 5,
//   head: 0,
//   tail: 0
// }
console.log(cq.dequeue()); // 1
console.log(cq.dequeue()); // 2
console.log(cq);
// CircularQueue {
//   array: [ <2 empty items>, 3, 4, 5 ],
//   size: 5,
//   length: 3,
//   head: 2,
//   tail: 0
// }
cq.enqueue(6);
console.log(cq);
// CircularQueue {
//   array: [ 6, <1 empty item>, 3, 4, 5 ],
//   size: 5,
//   length: 4,
//   head: 2,
//   tail: 1
// }
