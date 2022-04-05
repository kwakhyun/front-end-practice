/* user code */
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

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

BinaryTree.prototype.insert = function (value) {
  this.root = this.insertNode(this.root, value);
};

BinaryTree.prototype.postOrderTraverse = function (node, result) {
  if (node === null) return;
  
  this.postOrderTraverse(node.left, result);
  this.postOrderTraverse(node.right, result);
  result.push(node.value);
};

function answer(str) {
  let result = [];

  let tree = new BinaryTree();
  for (let i = 0; i < str.length; i++) {
    tree.insert(str[i]);
  }

  tree.postOrderTraverse(tree.root, result);

  return result;
}

/* main code */
let input = [
  // TC: 1
  "ABC",

  // TC: 2
  "FBADCEGIH",

  // TC: 3
  "CBAEDFG",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
// #1 [ 'C', 'B', 'A' ]
// #2 [
//   'A', 'C', 'E',
//   'D', 'B', 'H',
//   'I', 'G', 'F'
// ]
// #3 [
//   'A', 'B', 'D',
//   'G', 'F', 'E',
//   'C'
// ]