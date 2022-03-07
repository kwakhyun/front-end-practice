let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// 0
// 1
// 2

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
// 0
// 1
// 2

i = 5;
do {
  console.log(i);
  i++;
} while (i < 3);
// 5
