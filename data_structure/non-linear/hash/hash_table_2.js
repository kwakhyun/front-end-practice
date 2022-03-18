const HASH_SIZE = 100;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// 입력 key 값을 index로 출력하는 해시 함수 (loselosehash)
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// 데이터 추가
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key}, index: ${index}`);

  if (this.table[index] !== undefined) {
    return false;
  }
  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

// 데이터 조회
HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

// 데이터 삭제
HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element === undefined) {
    return false;
  }
  delete this.table[this.hashCode(key)];
  this.length--;

  return element;
};

let ht = new HashTable();

ht.put("key1", "value1"); // key: key1, index: 78
ht.put("key3", "value3"); // key: key3, index: 80
ht.put("key5", "value5"); // key: key5, index: 82
console.log(ht);
// HashTable {
//   table: [
//     <78 empty items>,
//     Element { key: 'key1', value: 'value1' },
//     <1 empty item>,
//     Element { key: 'key3', value: 'value3' },
//     <1 empty item>,
//     Element { key: 'key5', value: 'value5' },
//     <17 empty items>
//   ],
//   length: 3
// }

console.log(ht.get("key1")); // Element { key: 'key1', value: 'value1' }
console.log(ht.remove("key1")); // Element { key: 'key1', value: 'value1' }
console.log(ht.get("key1")); // undefined
console.log(ht.remove("key1")); // false
console.log(ht);
// HashTable {
//     table: [
//       <80 empty items>,
//       Element { key: 'key3', value: 'value3' },
//       <1 empty item>,
//       Element { key: 'key5', value: 'value5' },
//       <17 empty items>
//     ],
//     length: 2
//   }