// 층별 순회 구현을 위한 Queue 생성자
function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// value 와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 시작 노드인 root 생성자
function BinaryTree() {
  this.root = null;
}

// 재귀적으로 트리를 순회하며 node 추가
BinaryTree.prototype.insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this.insertNode(node.left, value);
  } else if (value > node.value) {
    node.right = this.insertNode(node.right, value);
  }

  return node;
};

// node 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this.insertNode(this.root, value);
};

// 재귀적으로 트리를 전위 순회
BinaryTree.prototype.preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  callback(node);
  this.preOrderTraverseNode(node.left, callback);
  this.preOrderTraverseNode(node.right, callback);
};

// 전위 순회하며 node 출력
BinaryTree.prototype.preOrderTraverse = function (callback) {
  this.preOrderTraverseNode(this.root, callback);
};

// 재귀적으로 트리를 중위 순회
BinaryTree.prototype.inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this.inOrderTraverseNode(node.left, callback);
  callback(node);
  this.inOrderTraverseNode(node.right, callback);
};

// 중위 순회하며 node 출력
BinaryTree.prototype.inOrderTraverse = function (callback) {
  this.inOrderTraverseNode(this.root, callback);
};

// 재귀적으로 트리를 후위 순회
BinaryTree.prototype.postOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this.postOrderTraverseNode(node.left, callback);
  this.postOrderTraverseNode(node.right, callback);
  callback(node);
};

// 후위 순회하며 node 출력
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this.postOrderTraverseNode(this.root, callback);
};

// 층별 순회하며 node 출력
BinaryTree.prototype.levelOrderTraverse = function (callback) {
  let queue = new Queue();
  let node;

  queue.enqueue(this.root);
  while (!queue.isEmpty()) {
    node = queue.dequeue();
    callback(node);
    if (node.left !== null) queue.enqueue(node.left);
    if (node.right !== null) queue.enqueue(node.right);
  }
};

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);
// BinaryTree {
//   root: Node {
//     value: 'F',
//     left: Node { value: 'B', left: [Node], right: [Node] },
//     right: Node { value: 'G', left: null, right: [Node] }
//   }
// }

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("\npreOrderTraverse");
tree.preOrderTraverse(printNode);
console.log("end"); // F -> B -> A -> D -> C -> E -> G -> I -> H -> end

console.log("\ninOrderTraverse");
tree.inOrderTraverse(printNode);
console.log("end"); // A -> B -> C -> D -> E -> F -> G -> H -> I -> end

console.log("\npostOrderTraverse");
tree.postOrderTraverse(printNode);
console.log("end"); // A -> C -> E -> D -> B -> H -> I -> G -> F -> end

console.log("\nlevelOrderTraverse");
tree.levelOrderTraverse(printNode);
console.log("end"); // F -> B -> G -> A -> D -> C -> E -> I -> H -> end
