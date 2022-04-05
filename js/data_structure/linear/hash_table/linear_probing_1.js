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
console.log(lht); // LinearHashTable { table: [ <5 empty items> ], length: 0 }
