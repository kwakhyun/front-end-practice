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

let tree = new BinaryTree();

tree.insert("F"); // this.root = new Node("F");
tree.insert("B"); // this.root.left = new Node("B");
tree.insert("A"); // this.root.left.left = new Node("A");
tree.insert("D"); // this.root.left.right = new Node("D");
tree.insert("C"); // this.root.left.right.left = new Node("C");
tree.insert("E"); // this.root.left.right.right = new Node("E");
tree.insert("G"); // this.root.right = new Node("G");
tree.insert("I"); // this.root.right.right = new Node("I");
tree.insert("H"); // this.root.right.right.left = new Node("H");

console.log(tree);
// BinaryTree {
//     root: Node {
//       value: 'F',
//       left: Node { value: 'B', left: [Node], right: [Node] },
//       right: Node { value: 'G', left: null, right: [Node] }
//     }
//   }
