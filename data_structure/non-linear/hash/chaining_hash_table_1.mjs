import { LinkedList } from "./linked_list.mjs";

const HASH_SIZE = 37;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hash function - loselose
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size
ChainingHashTable.prototype.size = function () {
  return this.length;
};

let cht = new ChainingHashTable();
console.log(cht); // ChainingHashTable { table: [ <37 empty items> ], length: 0 }

let ll = new LinkedList();
ll.append(new Element("a", 1));
console.log(ll);
// LinkedList {
//   head: Node { data: Element { key: 'a', value: 1 }, next: null },
//   length: 1
// }
