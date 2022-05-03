// 반복문 기반의 이진 검색
function binarySearch_loop(arr, n) {
  let lowIndex = 0;
  let midIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (arr[midIndex] > n) {
      highIndex = midIndex - 1;
    } else if (arr[midIndex] < n) {
      lowIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }

  return -1;
}

// 재귀 함수 기반의 이진 검색
function binarySearch_recursive(
  arr,
  n,
  lowIndex = 0,
  highIndex = arr.length - 1
) {
  if (lowIndex > highIndex) return -1;

  let midIndex = Math.floor((lowIndex + highIndex) / 2);

  if (arr[midIndex] > n) {
    return binarySearch_recursive(arr, n, lowIndex, midIndex - 1);
  } else if (arr[midIndex] < n) {
    return binarySearch_recursive(arr, n, midIndex + 1, highIndex);
  } else {
    return midIndex;
  }
}

// 테스트 코드
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch_loop(array, 3)); // 3
console.log(binarySearch_loop(array, 5)); // 5
console.log(binarySearch_loop(array, 7)); // 7
console.log(binarySearch_loop(array, 10)); // -1

console.log(binarySearch_recursive(array, 3)); // 3
console.log(binarySearch_recursive(array, 5)); // 5
console.log(binarySearch_recursive(array, 7)); // 7
console.log(binarySearch_recursive(array, 10)); // -1
