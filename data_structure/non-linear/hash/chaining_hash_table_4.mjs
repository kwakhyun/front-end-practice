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

// get
ChainingHashTable.prototype.get = function (key) {
  let position = this.hashCode(key);

  if (this.table[position] !== undefined && !this.table[position].isEmpty()) {
    let current = this.table[position].head;
    do {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    } while (current != null);
  }

  return undefined;
};

let cht = new ChainingHashTable();

cht.put("Ana", 1); // position: 13
cht.put("Donnie", 2); // position: 13
cht.put("Sue", 3); // position: 5
cht.put("Jamie", 4); // position: 5
cht.put("Paul", 5); // position: 32

console.log(cht.get("Ana")); // 1
console.log(cht.get("Donnie")); // 2
console.log(cht.get("kwakhyun")); // undefined