function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}

let fb1 = new FishBread("cream", 1200);
let fb2 = new FishBread("redbean", 1000);
let fb3 = new FishBread("milk", 1500);

console.log(fb1); // FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(fb2); // FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(fb3); // FishBread { flavor: 'milk', price: 1500, base: 'flour' }

function User(name) {
  console.log(new.target); // [Function: User]
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

let rs1 = User("kh");
console.log(rs1); // User { name: 'kh' }

let rs2 = new User("ys");
console.log(rs2); // User { name: 'ys' }
