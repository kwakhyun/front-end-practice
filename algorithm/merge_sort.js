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

let mergeSort = function (arr, compare) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), compare);
  let right = mergeSort(arr.slice(mid), compare);

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j])) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
  
  return arr;
};

let init_array = [6, 5, 1, 3, 2, 4];

let sorting = [mergeSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(`${sorting[i].name} ${order[j].name}`);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
