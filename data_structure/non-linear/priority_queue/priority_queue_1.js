// 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

// 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

// 객체 내 데이터 존재 여부 확인
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
// {
//     constructor: {
//       value: [Function: Element],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     }
//   }
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));
// {
//     constructor: {
//       value: [Function: PriorityQueue],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     },
//     getBuffer: {
//       value: [Function (anonymous)],
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     isEmpty: {
//       value: [Function (anonymous)],
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
//   }