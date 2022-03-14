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

// 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }

  if (!added) {
    this.array.push(element);
  }

  return this.array.length;
};

// 데이터 삭제
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

let pq = new PriorityQueue();

pq.enqueue("kh", 1);
pq.enqueue("ys", 2);
console.log(pq);
// PriorityQueue {
//   array: [
//     Element { data: 'kh', priority: 1 },
//     Element { data: 'ys', priority: 2 }
//   ]
// }
pq.enqueue("alice", 1);
pq.enqueue("bob", 3);
console.log(pq);
// PriorityQueue {
//   array: [
//     Element { data: 'kh', priority: 1 },
//     Element { data: 'alice', priority: 1 },
//     Element { data: 'ys', priority: 2 },
//     Element { data: 'bob', priority: 3 }
//   ]
// }
pq.dequeue();
console.log(pq);
// PriorityQueue {
//   array: [
//     Element { data: 'alice', priority: 1 },
//     Element { data: 'ys', priority: 2 },
//     Element { data: 'bob', priority: 3 }
//   ]
// }