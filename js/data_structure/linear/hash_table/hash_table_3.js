const HASH_SIZE = 37;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// 입력 key 값을 index로 출력하는 해시 함수 - loselose
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
  // console.log(`key: ${key}, index: ${index}`);

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

// 초기화
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// 크기 반환
HashTable.prototype.size = function () {
  return this.length;
};

// 모든 데이터 반환
HashTable.prototype.getBuffer = function () {
  let array = [];

  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      array.push(this.table[i]);
    }
  }

  return array;
};

// 모든 데이터 출력
HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(
        `${i} -> key: ${this.table[i].key}, value: ${this.table[i].value}`
      );
    }
  }
};

let ht = new HashTable();

ht.put("key1", "value1");
ht.put("key3", "value3");
ht.put("key5", "value5");

ht.print();
// 8 -> key: key1, value: value1
// 10 -> key: key3, value: value3
// 12 -> key: key5, value: value5

console.log(ht.getBuffer());
// [
//     Element { key: 'key1', value: 'value1' },
//     Element { key: 'key3', value: 'value3' },
//     Element { key: 'key5', value: 'value5' }
//   ]

console.log(ht.size()); // 3
ht.clear();
console.log(ht); // HashTable { table: [ <37 empty items> ], length: 0 }
