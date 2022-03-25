// value 와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 시작 노드인 root 생성자
function BinarySearchTree() {
  this.root = null;
}

// 재귀적으로 트리를 순회하며 node 추가
BinarySearchTree.prototype.insertNode = function (node, value) {
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
BinarySearchTree.prototype.insert = function (value) {
  this.root = this.insertNode(this.root, value);
};

// 재귀적으로 트리를 중위 순회
BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this.inOrderTraverseNode(node.left, callback);
  callback(node);
  this.inOrderTraverseNode(node.right, callback);
};

// 중위 순회하며 node 출력
BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  this.inOrderTraverseNode(this.root, callback);
  console.log("end");
};

// 반복문으로 트리를 순회하며 최솟값 node 탐색
BinarySearchTree.prototype.minNode = function (node) {
  if (node === null) {
    return null;
  }

  while (node && node.left !== null) {
    node = node.left;
  }

  return node.value;
};

// 반복문으로 트리를 순회하며 최댓값 node 탐색
BinarySearchTree.prototype.maxNode = function (node) {
  if (node === null) {
    return null;
  }

  while (node && node.right !== null) {
    node = node.right;
  }

  return node.value;
};

// 최솟값 node 찾기
BinarySearchTree.prototype.min = function () {
  return this.minNode(this.root);
};

// 최댓값 node 찾기
BinarySearchTree.prototype.max = function () {
  return this.maxNode(this.root);
};

// 재귀적으로 트리를 순회하며 node 탐색
BinarySearchTree.prototype.searchNode = function (node, value) {
  if (node === null) {
    return null;
  } else if (node.value === value) {
    return node;
  } else if (node.value > value) {
    return this.searchNode(node.left, value);
  } else if (node.value < value) {
    return this.searchNode(node.right, value);
  }
};

// value 값을 탐색하며 node 찾기
BinarySearchTree.prototype.search = function (value) {
  return this.searchNode(this.root, value);
};

// 반복문으로 트리를 순회하며 최솟값 node 반환
BinarySearchTree.prototype.findMinNode = function (node) {
  while (node && node.left !== null) {
    node = node.left;
  }

  return node;
};

// 재귀적으로 트리를 순회하며 해당 node 삭제
BinarySearchTree.prototype.removeNode = function (node, value) {
  if (node === null) {
    return null;
  }

  if (node.value === value) {
    if (node.left === null && node.right === null) {
      // 자식이 없는 경우
      node = null;
    } else if (node.left === null) {
      // 왼쪽 자식이 없는 경우
      node = node.right;
    } else if (node.right === null) {
      // 오른쪽 자식이 없는 경우
      node = node.left;
    } else {
      // 자식 노드가 2개 이상일 때
      let temp = this.findMinNode(node.right); // 오른쪽 자식중 최솟값 node 찾기
      node.value = temp.value;
      node.right = this.removeNode(node.right, temp.value);
    }
  } else if (node.value > value) {
    node.left = this.removeNode(node.left, value);
  } else if (node.value < value) {
    node.right = this.removeNode(node.right, value);
  }

  return node;
};

// node 삭제
BinarySearchTree.prototype.remove = function (value) {
  this.root = this.removeNode(this.root, value);
};

let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

tree.inOrderTraverse(printNode); // A -> B -> C -> D -> E -> F -> G -> H -> I -> end
tree.remove("A");
tree.inOrderTraverse(printNode); // B -> C -> D -> E -> F -> G -> H -> I -> end
tree.remove("B");
tree.inOrderTraverse(printNode); // C -> D -> E -> F -> G -> H -> I -> end
tree.remove("I");
tree.inOrderTraverse(printNode); // C -> D -> E -> F -> G -> H -> end 

console.log(tree.root);
// Node {
//   value: 'F',
//   left: Node {
//     value: 'D',
//     left: Node { value: 'C', left: null, right: null },
//     right: Node { value: 'E', left: null, right: null }
//   },
//   right: Node {
//     value: 'G',
//     left: null,
//     right: Node { value: 'H', left: null, right: null }
//   }
// }