// 문자 값과 단어 여부 값 저장을 위한 노드 생성자
function TrieNode() {
  this.children = {}; // key: 문자 값, value: TrieNode
  this.endOfWord = false; // 단어의 끝 여부
}

// root 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}

// 문자열 추가
Trie.prototype.insert = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (!current.children[char]) {
      current.children[char] = new TrieNode();
    }

    current = current.children[char];
  }

  current.endOfWord = true;
};

// 문자열 검색 - 존재 여부 반환
Trie.prototype.search = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (!current.children[char]) {
      return false;
    }

    current = current.children[char];
  }

  return current.endOfWord;
};

// 문자열 삭제
Trie.prototype.delete = function (word, current = this.root, index = 0) {
  if (index === word.length) {
    if (!current.endOfWord) return false;
    current.endOfWord = false;
    return Object.keys(current.children).length === 0;
  }

  let char = word[index];
  let node = current.children[char];

  if (!node) return false;

  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
  if (isDeleteNode) {
    delete current.children[char];
    return Object.keys(current.children).length === 0;
  }

  return false;
};

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.search("bee")); // true
trie.delete("beer");
console.log(trie.search("bee")); // true
trie.delete("b");
console.log(trie.search("bee")); // true
trie.delete("bee");
console.log(trie.search("bee")); // false

console.log(trie.root.children);
// {
//   b: TrieNode { children: { e: [TrieNode] }, endOfWord: false },
//   c: TrieNode {
//     children: { a: [TrieNode], d: [TrieNode] },
//     endOfWord: false
//   }
// }

console.log(trie.root.children["b"]);
// TrieNode {
//   children: { e: TrieNode { children: {}, endOfWord: true } },
//   endOfWord: false
// }

console.log(trie.root.children["b"].children["e"]);
// TrieNode { children: {}, endOfWord: true }