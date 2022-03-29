// 최대 힙 - Max Heap
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
  while (this.getParent(index) && this.getParent(index) < this.items[index]) {
    this.swap(index, this.parentIndex(index));
    index = this.parentIndex(index);
  }
};

// root 노드 반환 및 삭제
Heap.prototype.extractMax = function () {
  let max = this.items[0];
  this.items[0] = this.items[this.size() - 1];
  this.items.pop();
  this.bubbleDown();
  return max;
};

// 대체된 root 노드 위치 정렬
Heap.prototype.bubbleDown = function () {
  let index = 0;
  while (
    this.getLeftChild(index) &&
    (this.getLeftChild(index) > this.items[index] ||
      this.getRightChild(index) > this.items[index])
  ) {
    let childIndex = this.leftChildIndex(index);
    if (
      this.getRightChild(index) &&
      this.getRightChild(index) > this.getLeftChild(index)
    ) {
      childIndex = this.rightChildIndex(index);
    }
    this.swap(index, childIndex);
    index = childIndex;
  }
};

let maxHeap = new Heap();

maxHeap.insert(15);
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(12);
maxHeap.insert(2);
maxHeap.insert(8);
maxHeap.insert(5);
console.log(maxHeap.items);
// [
//   15, 12, 8, 10,
//    2,  7, 5
// ]
maxHeap.insert(50);
console.log(maxHeap.items);
// [
//   50, 15, 10, 7,
//   12,  2,  8, 5
// ]

console.log(maxHeap.extractMax()); // 50
console.log(maxHeap.extractMax()); // 15
console.log(maxHeap.extractMax()); // 12
console.log(maxHeap.extractMax()); // 10
console.log(maxHeap.extractMax()); // 8
console.log(maxHeap.extractMax()); // 7
console.log(maxHeap.extractMax()); // 5
console.log(maxHeap.extractMax()); // 2
console.log(maxHeap.extractMax()); // undefined