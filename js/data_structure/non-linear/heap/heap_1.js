// 최소 힙 - Min Heap
function Heap() {
  this.items = [];
}

// 배열 내 두 요소 위치 변경
Heap.prototype.swap = function (i, j) {
  let temp = this.items[i];
  this.items[i] = this.items[j];
  this.items[j] = temp;
};

// 부모 노드의 위치 반환
Heap.prototype.parentIndex = function (i) {
  return Math.floor((i - 1) / 2);
};

// 왼쪽 자식 노드의 위치 반환
Heap.prototype.leftChildIndex = function (i) {
  return 2 * i + 1;
};

// 오른쪽 자식 노드의 위치 반환
Heap.prototype.rightChildIndex = function (i) {
  return 2 * i + 2;
};

// 부모 노드의 값 반환
Heap.prototype.getParent = function (i) {
  return this.items[this.parentIndex(i)];
};

// 왼쪽 자식 노드의 값 반환
Heap.prototype.getLeftChild = function (i) {
  return this.items[this.leftChildIndex(i)];
};

// 오른쪽 자식 노드의 값 반환
Heap.prototype.getRightChild = function (i) {
  return this.items[this.rightChildIndex(i)];
};

// 현재 정렬된 최소/최대 값 반환
Heap.prototype.peek = function () {
  return this.items[0];
};

// 현재 배열의 길이 반환
Heap.prototype.size = function () {
  return this.items.length;
};
