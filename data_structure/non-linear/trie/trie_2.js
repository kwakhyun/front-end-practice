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

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.search("b")); // false
console.log(trie.search("be")); // true
console.log(trie.search("beer")); // false
