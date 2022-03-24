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

BinaryTree.prototype.preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  callback(node);
  this.preOrderTraverseNode(node.left, callback);
  this.preOrderTraverseNode(node.right, callback);
};

BinaryTree.prototype.preOrderTraverse = function (callback) {
  this.preOrderTraverseNode(this.root, callback);
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

function printNode(node) {
  process.stdout.write(node.value + " ");
}

tree.preOrderTraverse(printNode);
console.log("end"); // F B A D C E G I H end
