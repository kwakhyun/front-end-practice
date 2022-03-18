// 개체(Entity)를 저장할 딕셔너리 생성자
function Dictionary(items = {}) {
  this.items = items;
}

// 모든 개체(Entity)를 반환하는 메서드
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

// 딕셔너리를 초기화하는 메서드
Dictionary.prototype.clear = function () {
  this.items = {};
};
// 딕셔너리의 크기를 반환하는 메서드
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

let dict = new Dictionary({ age: 26, name: "kwakhyun" });
console.log(dict); // Dictionary { items: { age: 26, name: 'kwakhyun' } }

console.log(dict.getBuffer()); // { age: 26, name: 'kwakhyun' }
console.log(dict.size()); // 2
dict.clear();
console.log(dict); // Dictionary { items: {} }
