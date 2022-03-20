const HASH_SIZE = 5; // 사이즈를 줄여 충돌 빈도 증가

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// 해시 함수 - loselose
LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % HASH_SIZE;
};

// 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return false;
};

// 데이터 조회
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

// 초기화
LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// 크기 반환
LinearHashTable.prototype.size = function () {
  return this.length;
};

// 모든 데이터 반환
LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      array.push(this.table[i]);
    }
  }
  return array;
};

// 모든 데이터 출력
LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(
        `${i} -> key: ${this.table[i].key}, value: ${this.table[i].value}`
      );
    }
  }
};

let lht = new LinearHashTable();

lht.put("Ana", 123); // index: 2
lht.put("Bob", 456); // index: 0
lht.put("Cel", 789); // index: 1
lht.put("Dan", 101); // index: 0
lht.put("Eli", 202); // index: 2

console.log(lht.get("Ana")); // 123
console.log(lht.get("Bob")); // 456
console.log(lht.get("kwakhyun")); // undefined
