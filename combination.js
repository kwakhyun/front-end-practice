let input = [1, 2, 3, 4];
let count = 0;

function combination(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
console.log(count);
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4
// 6

let count2 = 0;
let output = [];

function recursive(arr, data, s, idx, r) {
  if (s == r) {
    count2++;
    console.log(data);
    return;
  }

  for (let i = idx; r - s <= arr.length - i; i++) {
    data[s] = arr[i];
    recursive(arr, data, s + 1, i + 1, r);
  }
}

recursive(input, output, 0, 0, 2);
console.log(count2);
// [ 1, 2 ]
// [ 1, 3 ]
// [ 1, 4 ]
// [ 2, 3 ]
// [ 2, 4 ]
// [ 3, 4 ]
// 6