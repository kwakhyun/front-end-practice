// 반복문 기반 binary search
function binarySearch_loop(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// 재귀 함수 기반 binary search
function binarySearch_recursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] > target) {
    return binarySearch_recursive(arr, target, left, mid - 1);
  } else if (arr[mid] < target) {
    return binarySearch_recursive(arr, target, mid + 1, right);
  } else {
    return mid;
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch_loop(array, 5)); // 4
console.log(binarySearch_loop(array, 10)); // 9
console.log(binarySearch_loop(array, 11)); // -1

console.log(binarySearch_recursive(array, 5)); // 4
console.log(binarySearch_recursive(array, 10)); // 9
console.log(binarySearch_recursive(array, 11)); // -1
