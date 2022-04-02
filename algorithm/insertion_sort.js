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

let init_array = [6, 5, 1, 3, 2, 4];

let sorting = [insertionSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(`${sorting[i].name} ${order[j].name}`);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
// insertionSort ascending
// [ 6, 5, 4, 3, 2, 1 ]
// insertionSort descending
// [ 1, 2, 3, 4, 5, 6 ]