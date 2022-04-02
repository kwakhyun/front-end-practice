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

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let init_array = [6, 5, 1, 3, 2, 4];

let array = [...init_array];
bubbleSort1(array);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]

array = [...init_array];
bubbleSort2(array);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]

array = [...init_array];
bubbleSort3(array);
console.log(array); // [ 1, 2, 3, 4, 5, 6 ]

let sorting = [bubbleSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(`${sorting[i].name} ${order[j].name}`);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
// bubbleSort ascending
// [ 1, 2, 3, 4, 5, 6 ]
// bubbleSort descending
// [ 6, 5, 4, 3, 2, 1 ]
