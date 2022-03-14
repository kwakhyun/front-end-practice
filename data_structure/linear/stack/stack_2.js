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

// push() 구현 함수
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop() 구현 함수
Stack.prototype.pop = function () {
  return this.array.pop();
};

// peek() 구현 함수
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

// size() 구현 함수
Stack.prototype.size = function () {
  return this.array.length;
};

let stack = new Stack([1, 2]);
console.log(stack); // Stack { array: [ 1, 2 ] }

stack.push(3);
console.log(stack); // Stack { array: [ 1, 2, 3 ] }

console.log(stack.pop()); // 3
console.log(stack); // Stack { array: [ 1, 2 ] }

console.log(stack.peek()); // 2

console.log(stack.size()); // 2
