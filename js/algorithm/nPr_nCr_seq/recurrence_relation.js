let result;

// 등차 수열
function forloop1(s, ct, number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      total += s;
    } else {
      total += ct;
    }
    console.log(`f(${i}) + ${ct} = ${total}`);
  }

  return total;
}

result = forloop1(3, 2, 5);
console.log(result);
// f(1) + 2 = 3
// f(2) + 2 = 5
// f(3) + 2 = 7
// f(4) + 2 = 9
// f(5) + 2 = 11
// 11

function recursive1(s, ct, number) {
  if (number == 1) {
    return s;
  }

  return recursive1(s, ct, number - 1) + ct;
}

result = recursive1(3, 2, 5);
console.log(result); // 11

// 등비 수열
function forloop2(s, ct, number) {
  let total = 1;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      total *= s;
    } else {
      total *= ct;
    }
    console.log(`f(${i}) * ${ct} = ${total}`);
  }

  return total;
}

result = forloop2(3, 2, 5);
console.log(result);
// f(1) * 2 = 3
// f(2) * 2 = 6
// f(3) * 2 = 12
// f(4) * 2 = 24
// f(5) * 2 = 48
// 48

function recursive2(s, ct, number) {
  if (number == 1) {
    return s;
  }

  return recursive2(s, ct, number - 1) * ct;
}

result = recursive2(3, 2, 5);
console.log(result); // 48

// 팩토리얼
function recursive3(number) {
  if (number == 1) {
    return 1;
  }

  return recursive3(number - 1) * number;
}

result = recursive3(5);
console.log(result); // 120

// 피보나치 수열
function recursive4(number) {
  if (number == 1 || number == 0) {
    return number;
  }

  return recursive4(number - 1) + recursive4(number - 2);
}

result = recursive4(7);
console.log(result); // 13
