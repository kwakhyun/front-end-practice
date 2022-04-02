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

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
};

let init_array = [6, 5, 1, 3, 2, 4];

let sorting = [selectionSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(`${sorting[i].name} ${order[j].name}`);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
// selectionSort ascending
// [ 1, 2, 3, 4, 5, 6 ]
// selectionSort descending
// [ 6, 5, 4, 3, 2, 1 ]
