import { LinkedList } from "./linked_list.mjs";

const HASH_SIZE = 37;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hash function - loselose
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// size
ChainingHashTable.prototype.size = function () {
  return this.length;
};

// getBuffer
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];

  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      do {
        array.push(current.data);
        current = current.next;
      } while (current != null);
    }
  }

  return array;
};

// print
ChainingHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      process.stdout.write(`${i}: `);
      do {
        process.stdout.write(`${current.data.key} : ${current.data.value} -> `);
        current = current.next;
      } while (current != null);
      process.stdout.write("null\n");
    }
  }
};

// put
ChainingHashTable.prototype.put = function (key, value) {
  let position = this.hashCode(key);
  console.log(`position: ${position}`);

  if (this.table[position] == null) {
    this.table[position] = new LinkedList();
  }
  this.table[position].append(new Element(key, value));
  this.length++;

  return true;
};

let cht = new ChainingHashTable();

cht.put("Ana", 1); // position: 13
cht.put("Donnie", 2); // position: 13
cht.put("Sue", 3); // position: 5
cht.put("Jamie", 4); // position: 5
cht.put("Paul", 5); // position: 32

console.log(cht);
// ChainingHashTable {
//   table: [
//     <5 empty items>,
//     LinkedList { head: [Node], length: 2 },
//     <7 empty items>,
//     LinkedList { head: [Node], length: 2 },
//     <18 empty items>,
//     LinkedList { head: [Node], length: 1 },
//     <4 empty items>
//   ],
//   length: 5
// }

cht.print();
// 5: Sue : 3 -> Jamie : 4 -> null
// 13: Ana : 1 -> Donnie : 2 -> null
// 32: Paul : 5 -> null

console.log(cht.getBuffer());
// [
//   Element { key: 'Sue', value: 3 },
//   Element { key: 'Jamie', value: 4 },
//   Element { key: 'Ana', value: 1 },
//   Element { key: 'Donnie', value: 2 },
//   Element { key: 'Paul', value: 5 }
// ]

