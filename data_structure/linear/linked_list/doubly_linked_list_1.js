function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.size = function () {
  return this.length;
};

DoublyLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let dll = new DoublyLinkedList();
let node;
console.log(dll); // DoublyLinkedList { head: null, tail: null, length: 0 }

node = new Node(123);
dll.head = node;
dll.tail = node;
console.log(dll);
// DoublyLinkedList {
//     head: Node { data: 123, next: null, prev: null },
//     tail: Node { data: 123, next: null, prev: null },
//     length: 0
//   }

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);
// DoublyLinkedList {
//     head: <ref *1> Node {
//       data: 123,
//       next: Node { data: 456, next: null, prev: [Circular *1] },
//       prev: null
//     },
//     tail: <ref *2> Node {
//       data: 456,
//       next: null,
//       prev: <ref *1> Node { data: 123, next: [Circular *2], prev: null }
//     },
//     length: 1
//   }