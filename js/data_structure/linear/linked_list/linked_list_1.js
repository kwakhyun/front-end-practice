function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.size = function () {
  return this.length;
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let ll = new LinkedList();
console.log(ll); // LinkedList { head: null, length: 0 }

ll.head = new Node(123);
ll.length++;
console.log(ll); // LinkedList { head: Node { data: 123, next: null }, length: 1 }

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
// LinkedList {
//     head: Node { data: 123, next: Node { data: 456, next: null } },
//     length: 2
//   }
