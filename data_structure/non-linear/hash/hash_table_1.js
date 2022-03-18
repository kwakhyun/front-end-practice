const HASH_SIZE = 100;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

let ht = new HashTable();
console.log(ht); // HashTable { table: [ <100 empty items> ], length: 0 }

console.log(ht.hashCode("Hello")); // 0
console.log(ht.hashCode("World")); // 20
console.log(ht.hashCode("Hello World")); // 52
