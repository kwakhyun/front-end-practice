let swap = function (arr, idx1, idx2) {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (compare(arr[j], arr[j + 1])) swap(arr, j, j + 1);
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];
      if (compare(arr[j], tmp)) {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
};

let mergeSort = function (arr, compare) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), compare);
  let right = mergeSort(arr.slice(mid), compare);

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }

  return arr;
};

let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
  let start = s;
  let pivot = arr[e];

  for (let i = s; i <= e; i++) {
    if (compare(arr[i], pivot)) {
      swap(arr, start, i);
      start++;
    }
  }
  swap(arr, start, e);

  if (start - 1 > s) quickSort(arr, compare, s, start - 1);
  if (start + 1 < e) quickSort(arr, compare, start + 1, e);
};

function benchmark(arr, callback, order) {
  let start = Date.now();
  callback(arr, order);
  return Date.now() - start;
}

let init_array = [];
let max = 30000;
for (let i = 0; i < max; i++) {
  init_array.push(Math.floor(Math.random() * max));
}

let array;
let sorting = [bubbleSort, selectionSort, insertionSort, mergeSort, quickSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    array = [...init_array];
    console.log(
      sorting[i].name,
      order[j].name,
      benchmark(array, sorting[i], order[j]) + "ms"
    );
  }
}
// bubbleSort ascending 1304ms
// bubbleSort descending 4784ms
// selectionSort ascending 336ms
// selectionSort descending 3235ms
// insertionSort ascending 165ms
// insertionSort descending 1456ms
// mergeSort ascending 18ms
// mergeSort descending 15ms
// quickSort ascending 8ms
// quickSort descending 14ms