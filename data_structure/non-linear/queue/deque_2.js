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

let dq = new Deque([1, 2, 3]);
console.log(dq); // Deque { array: [ 1, 2, 3 ] }

dq.pushFront(0);
dq.pushBack(4);
console.log(dq); // Deque { array: [ 0, 1, 2, 3, 4 ] }

dq.popFront();
dq.popBack();
console.log(dq); // Deque { array: [ 1, 2, 3 ] }
