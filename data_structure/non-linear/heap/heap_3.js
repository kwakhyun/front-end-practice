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

// 신규 노드 추가
Heap.prototype.insert = function (item) {
  this.items[this.size()] = item;
  this.bubbleUp();
};

// 추가된 노드 위치 정렬
Heap.prototype.bubbleUp = function () {
  let index = this.size() - 1;
  while (this.getParent(index) && this.getParent(index) > this.items[index]) {
    this.swap(index, this.parentIndex(index));
    index = this.parentIndex(index);
  }
};

// root 노드 반환 및 삭제
Heap.prototype.extractMin = function () {
  let min = this.items[0];
  this.items[0] = this.items[this.size() - 1];
  this.items.pop();
  this.bubbleDown();
  return min;
};

// 대체된 root 노드 위치 정렬
Heap.prototype.bubbleDown = function () {
  let index = 0;
  while (
    this.getLeftChild(index) &&
    (this.getLeftChild(index) < this.items[index] ||
      this.getRightChild(index) < this.items[index])
  ) {
    let childIndex =
      this.getLeftChild(index) < this.getRightChild(index)
        ? this.leftChildIndex(index)
        : this.rightChildIndex(index);
    this.swap(index, childIndex);
    index = childIndex;
  }
};

let minHeap = new Heap();

minHeap.insert(50);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(5);
console.log(minHeap.items);
// [
//   2,  5, 7, 10,
//  12, 15, 8, 50
// ]

console.log(minHeap.extractMin()); // 2
console.log(minHeap.extractMin()); // 5
console.log(minHeap.extractMin()); // 7
console.log(minHeap.extractMin()); // 8
console.log(minHeap.items); // [ 10, 12, 15, 50 ]
