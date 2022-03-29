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

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.root);
// TrieNode {
//     children: {
//       b: TrieNode { children: [Object], endOfWord: false },
//       c: TrieNode { children: [Object], endOfWord: false }
//     },
//     endOfWord: false
//   }

console.log(trie.root.children["c"]);
// TrieNode {
//     children: {
//       a: TrieNode { children: [Object], endOfWord: false },
//       d: TrieNode { children: {}, endOfWord: true }
//     },
//     endOfWord: false
//   }

console.log(trie.root.children["c"].children["a"]);
// TrieNode {
//     children: {
//       n: TrieNode { children: {}, endOfWord: true },
//       t: TrieNode { children: {}, endOfWord: true }
//     },
//     endOfWord: false
//   }
