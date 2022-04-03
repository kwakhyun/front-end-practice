let swap = function (arr, idx1, idx2) {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
};

let bubbleSort1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort3 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

function benchmark(arr, callback) {
  let start = new Date();
  callback(arr);
  let end = new Date();
  return end.getTime() - start.getTime();
}

let init_array = [];
let max = 10000;
for (let i = 0; i < max; i++) {
  init_array.push(Math.floor(Math.random() * max));
}

let array = [...init_array];
console.log(`Bubble sort 1: ${benchmark(array, bubbleSort1)} ms`);
// Bubble sort 1: 18099 ms
array = [...init_array];
console.log(`Bubble sort 2: ${benchmark(array, bubbleSort2)} ms`);
// Bubble sort 2: 14504 ms
array = [...init_array];
console.log(`Bubble sort 3: ${benchmark(array, bubbleSort3)} ms`);
 // Bubble sort 3: 14758 ms