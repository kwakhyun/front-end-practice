/* user code */
function Dictionary(data = {}) {
  this.data = data;
}

Dictionary.prototype.has = function (key) {
  return this.data.hasOwnProperty(key);
};

Dictionary.prototype.set = function (key, value) {
  this.data[key] = value;
};

function answer(class_1, class_2) {
  let result = [];
  let temp = new Dictionary();

  for (let i = 0; i < class_1.length; i++) {
    temp.set(class_1[i], true);
  }

  for (let i = 0; i < class_2.length; i++) {
    if (temp.has(class_2[i])) {
      result.push(class_2[i]);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    ["Kali", "Oliver", "Naomi"],
    ["Oliver", "Naomi", "Maya"],
  ],

  // TC: 2
  [
    ["Roxy", "Olga", "Kara", "Nana"],
    ["Oliver", "Roxy", "Kara", "Nana", "Maya"],
  ],

  // TC: 3
  [
    ["Roxy", "Ravi", "Nana", "Rei", "Karis", "Mana", "Naomi"],
    ["Olga", "Nana", "Rei", "Naomi", "Kali", "Ravi", "Kara"],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`${i + 1}: `);
  console.log(answer(input[i][0], input[i][1]));
}

// 1: [ 'Oliver', 'Naomi' ]
// 2: [ 'Roxy', 'Kara', 'Nana' ]
// 3: [ 'Nana', 'Rei', 'Naomi', 'Ravi' ]
