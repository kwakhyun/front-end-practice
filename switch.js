const day = 5;
let weekend = "";

switch (day) {
  case 1:
    weekend = "월";
    break;
  case 2:
    weekend = "화";
    break;
  case 3:
    weekend = "수";
    break;
  case 4:
    weekend = "목";
    break;
  case 5:
    weekend = "금";
    break;
  case 6:
    weekend = "토";
    break;
  case 7:
    weekend = "일";
    break;

  default:
    weekend = "error";
    break;
}

console.log(weekend);
// 금
