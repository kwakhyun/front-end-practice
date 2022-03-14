// 생성자 함수
function Queue(array) {
  this.array = array ? array : [];
  this.head = 0;
  this.tail = array ? array.length : 0;
}

// enqueue()
Queue.prototype.enqueue = function (element) {
  // return this.array.push(element);
  return (this.array[this.tail++] = element);
};

// dequeue()
Queue.prototype.dequeue = function () {
  // return this.array.shift();
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};

let queue = new Queue([1, 2, 3]);

queue.dequeue();
console.log(queue); // Queue { array: [ <1 empty item>, 2, 3 ], head: 1, tail: 3 }
