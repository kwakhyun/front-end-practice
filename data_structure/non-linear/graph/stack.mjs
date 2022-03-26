export { Stack };

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

// indexOf() 구현 함수
Stack.prototype.indexOf = function (element, position = 0) {
  // return this.array.indexOf(element, position);
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return i;
  }
  return -1;
};

// includes() 구현 함수
Stack.prototype.includes = function (element, position = 0) {
  // return this.array.includes(element);
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return true;
  }
  return false;
};

let stack = new Stack([1, 2, 3]);

console.log(stack.indexOf(1)); // 0
console.log(stack.indexOf(2)); // 1
console.log(stack.indexOf(1, 2)); // -1

console.log(stack.includes(3)); // true
console.log(stack.includes(4)); // false
