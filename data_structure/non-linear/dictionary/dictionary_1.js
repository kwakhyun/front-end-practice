function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

Dictionary.prototype.clear = function () {
  this.items = {};
};

Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

let dict = new Dictionary({ age: 26, name: "kwakhyun" });
console.log(dict);

console.log(dict.getBuffer());
console.log(dict.size());
dict.clear();
console.log(dict);
