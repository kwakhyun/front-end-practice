let input = ["a", "b", "c"];
let count = 0;

function permutation(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      for (let k = 0; k < arr.length; k++) {
        if (i == k) continue;
        if (j == k) continue;
        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

permutation(input);
console.log(count);
// a b c
// a c b
// b a c
// b c a
// c a b
// c b a
// 6

let count2 = 0;

function recursive(arr, s, r) {
  if (s == r) {
    count2++;
    console.log(arr.join(" "));
    return;
  }
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]];
    recursive(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]];
  }
}

recursive(input, 0, 2);
console.log(count2);
// a b c
// a c b
// b a c
// b c a
// c b a
// c a b
// 6
