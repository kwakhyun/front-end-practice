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

// node 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// node 추가
LinkedList.prototype.append = function (value) {
  let node = new Node(value);
  current = this.head;
  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

let ll = new LinkedList();

ll.append(1);
ll.printNode(); // 1 -> null
ll.append(2);
ll.printNode(); // 1 -> 2 -> null
ll.append(3);
ll.printNode(); // 1 -> 2 -> 3 -> null

console.log(ll.size()); // 3
