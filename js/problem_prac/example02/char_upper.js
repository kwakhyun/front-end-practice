/* user code */
function answer(str) {
  let fix_str = "";

  let temp = str.split(" ");
  for (let i = 0; i < temp.length; i++) {
    fix_str += temp[i][0].toUpperCase() + temp[i].slice(1) + " ";
  }

//   for (let item of str.split(" ")) {
//     fix_str += item[0].toUpperCase() + item.slice(1) + " ";
//   }

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is kwakhyun",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// #1 Hello, My Name Is Kwakhyun
// #2 This Week Is Closed Due To COVID-19
// #3 Fifty Percent Off This Week
