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

// enqueue() 구현 함수
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

// dequeue() 구현 함수
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

let queue = new Queue([1, 2]);
console.log(queue); // Queue { array: [ 1, 2 ] }

queue.enqueue(3);
queue.enqueue(4);
console.log(queue); // Queue { array: [ 1, 2, 3, 4 ] }

queue.dequeue();
console.log(queue); // Queue { array: [ 2, 3, 4 ] }
queue.dequeue();
console.log(queue); // Queue { array: [ 3, 4 ] }
