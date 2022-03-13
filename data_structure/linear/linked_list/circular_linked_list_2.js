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

CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  if (this.length != 0) {
    process.stdout.write(`${this.head.data} -> `);
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }

  console.log("null");
};

CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }

  node.next = this.head;

  this.length++;
};

let cll = new CircularLinkedList();

cll.append(1);
cll.append(10);
cll.append(100);

console.log(cll);
// CircularLinkedList {
//   head: Node { data: 1, next: Node { data: 10, next: [Node] } },
//   length: 3
// }

cll.printNode(); // head -> 1 -> 10 -> 100 -> null
console.log(cll.size()); // 3
