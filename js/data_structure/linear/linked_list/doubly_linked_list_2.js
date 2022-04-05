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

DoublyLinkedList.prototype.printNode = function () {
  process.stdout.write(`head -> `);
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

DoublyLinkedList.prototype.printNodeInverse = function () {
  let temp = [];

  process.stdout.write(`null <- `);
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `);
  }
  console.log("tail");
};

DoublyLinkedList.prototype.append = function(value){
    let node = new Node(value);

    if(this.head === null){
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    this.length++;
}

let dll = new DoublyLinkedList();

dll.append(1);
dll.append(2);
dll.append(3);

dll.printNode(); // head -> 1 -> 2 -> 3 -> null
dll.printNodeInverse(); // null <- 1 <- 2 <- 3 <- tail