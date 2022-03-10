// 생성자 속성 정의
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype을 이용한 Person 메서드 정의
Person.prototype.isAudlt = function () {
  return this.age > 18;
};

// 객체 생성
const p1 = new Person("kh", 26);
const p2 = new Person("ys", 18);

console.log(p1); // Person { name: 'kh', age: 26 }
console.log(p2); // Person { name: 'ys', age: 18 }
console.log(Object.getOwnPropertyDescriptors(p1));
// {
//     name: { value: 'kh', writable: true, enumerable: true, configurable: true },
//     age: { value: 26, writable: true, enumerable: true, configurable: true }
//   }
console.log(p1.isAudlt()); // true
console.log(p2.isAudlt()); // false
