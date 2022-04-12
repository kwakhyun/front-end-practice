// Deque(Double-Ended Queue) 생성자 함수
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

// 앞쪽 데이터 추가
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

// 앞쪽 데이터 삭제
Deque.prototype.popFront = function () {
  return this.array.shift();
};

// 뒤쪽 데이터 추가
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};

// 뒤쪽 데이터 삭제
Deque.prototype.popBack = function () {
  return this.array.pop();
};

// 가장 앞쪽 데이터 반환
Deque.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

// 가장 뒤쪽 데이터 반환
Deque.prototype.back = function () {
  return this.array.length === 0
    ? undefined
    : this.array[this.array.length - 1];
};

// 데이터 개수 확인
Deque.prototype.size = function () {
  return this.array.length;
};

// 데이터 전체 삭제
Deque.prototype.clear = function () {
  this.array = [];
};

let dq = new Deque([1, 2, 3]);
console.log(dq); // Deque { array: [ 1, 2, 3 ] }

console.log(dq.front()); // 1
console.log(dq.back()); // 3
console.log(dq.size()); // 3

dq.clear();
console.log(dq); // Deque { array: [] }
