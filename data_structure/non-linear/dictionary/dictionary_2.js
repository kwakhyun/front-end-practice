// 개체(Entity)를 저장할 딕셔너리 생성자
function Dictionary(items = {}) {
  this.items = items;
}

// 모든 개체(Entity) 반환
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// 딕셔너리 초기화
Dictionary.prototype.clear = function () {
  this.items = {};
};

// 딕셔너리 크기 반환
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

// 개체(Entity) 존재 여부 확인
Dictionary.prototype.has = function (key) {
  return this.items.hasOwnProperty(key);
};

// 개체(Entity) 추가
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

// 개체(Entity) 조회
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

// 개체(Entity) 삭제
Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }

  return false;
};

let dict = new Dictionary();
dict.set("age", 26);
dict.set("name", "kwakhyun");
dict.set("height", 190);
console.log(dict); // Dictionary { items: { age: 26, name: 'kwakhyun', height: 190 } }

dict.remove("age");
console.log(dict); // Dictionary { items: { name: 'kwakhyun', height: 190 } }

console.log(dict.has("age")); // false
console.log(dict.has("name")); // true
console.log(dict.has("height")); // true

console.log(dict.get("age")); // undefined
console.log(dict.get("name")); // kwakhyun
console.log(dict.get("height")); // 190
