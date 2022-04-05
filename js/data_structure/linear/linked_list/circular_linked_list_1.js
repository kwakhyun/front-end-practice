function Node(data) {
  this.data = data;
  this.next = null;
}

function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

CircularLinkedList.prototype.size = function () {
  return this.length;
};

CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let cll = new CircularLinkedList();
let node;
console.log(cll); // CircularLinkedList { head: null, length: 0 }

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);
// CircularLinkedList {
//     head: <ref *1> Node { data: 123, next: [Circular *1] },
//     length: 1
//   }

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);
// CircularLinkedList {
//     head: <ref *1> Node {
//       data: 123,
//       next: Node { data: 456, next: [Circular *1] }
//     },
//     length: 2
//   }