/* user code */
function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable(size) {
  this.size = size;
  this.table = new Array(this.size);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};

HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  let start_index = index;
  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, index + 1);
      this.length++;
      return true;
    }
    index = (index + 1) % this.size;
  } while (index !== start_index);
};

HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let start_index = index;
  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }
    index = (index + 1) % this.size;
  } while (index !== start_index);
  return undefined;
};

/* user code */
function answer(name) {
  let result = [];
  let ht = new HashTable(name.length);

  for (let i = 0; i < name.length; i++) {
    ht.put(name[i]);
  }

  for (let i = 0; i < name.length; i++) {
    result.push(ht.get(name[i]));
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  ["Mana", "Naomi", "Lelia", "Morris", "Madonna"],

  // TC: 2
  ["Oliver", "Mabel", "Nero", "Rei", "Kara", "Jordan", "Nami"],

  // TC: 3
  [
    "Ruby",
    "Robin",
    "Jordan",
    "Kori",
    "Rei",
    "Madonna",
    "Justin",
    "Maya",
    "Lakia",
    "Kali",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`${i + 1}: `);
  console.log(answer(input[i]));
}

// 1: [ 2, 1, 3, 4, 5 ]
// 2: [
//   3, 6, 7, 2,
//   1, 5, 4
// ]
// 3: [
//   9, 7, 8, 6, 10,
//   3, 1, 4, 5,  2
// ]