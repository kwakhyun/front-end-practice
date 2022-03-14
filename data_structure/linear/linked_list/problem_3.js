/* user code */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];

  let ll = new LinkedList();
  let current, prev;
  for (let i = 1; i <= n; i++) {
    current = new Node(i);

    if (i === 1) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  }
  current.next = ll.head;

  current = ll.head;
  while (--m) {
    prev = current;
    current = current.next;
  }

  let count;
  while (current.next != current) {
    result.push(current.data);
    prev.next = current.next;

    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }

  result.push(current.data);

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}

// #1 [
//     2, 5, 8, 4,
//     1, 7, 3, 6
//   ]
// #2 [
//      2, 5, 8, 1, 6,
//     10, 7, 4, 9, 3
//   ]
// #3 [
//      5, 12, 19,  7, 15, 3, 13,
//      2, 14,  6, 18, 11, 9,  8,
//     10, 17,  4, 16, 20, 1
//   ]