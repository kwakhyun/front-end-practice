// Date
let date_now = new Date(); // object
let date_str = Date(); // string

console.log(date_now); // 2022-03-05T02:12:31.998Z
console.log(date_str); // Sat Mar 05 2022 11:12:31 GMT+0900 (대한민국 표준시)

let date_ms_1 = new Date(0);
let date_ms_2 = new Date(1000 * 3600 * 24);

console.log(date_ms_1); // 1970-01-01T00:00:00.000Z
console.log(date_ms_2); // 1970-01-02T00:00:00.000Z

let date_string = new Date("2022-01-01");
console.log(date_string); // 2022-01-01T00:00:00.000Z

let date_params_1 = new Date(2022, 0, 1); // month : 1월(0) ~ 12월(11)
let date_params_2 = new Date(Date.UTC(2022, 0, 1));

console.log(date_params_1); // 2021-12-31T15:00:00.000Z
console.log(date_params_2); // 2022-01-01T00:00:00.000Z

let date = new Date(Date.UTC(2022, 0, 1));

console.log(date); // 2022-01-01T00:00:00.000Z

console.log(date.getFullYear()); // 2022
console.log(date.getMonth()); // 0
console.log(date.getDate()); // 1
console.log(date.getDay()); // 6 (day : 일요일(0) ~ 토요일(6))

console.log(date.getHours()); // 9
console.log(date.getUTCHours()); // 0

console.log(date.getTime()); // 1640995200000
console.log(new Date(date.getTime())); // 2022-01-01T00:00:00.000Z
console.log(date.getTimezoneOffset()); // -540 (9시간)

let ms_year = date.setFullYear(2022, 2, 5);

console.log(date); // 2022-03-05T00:00:00.000Z
console.log(ms_year); // 1646438400000
console.log(new Date(ms_year)); // 2022-03-05T00:00:00.000Z

date.setDate(1);
console.log(date); // 2022-03-01T00:00:00.000Z
date.setDate(0);
console.log(date); // 2022-02-28T00:00:00.000Z

date.setHours(date.getHours() + 2);
console.log(date); // 2022-02-28T02:00:00.000Z

// date parse
let ms_parse = Date.parse("2022-03-05T00:00:00.000");

console.log(ms_parse); // 1646406000000
console.log(new Date(ms_parse)); // 2022-03-04T15:00:00.000Z
console.log(new Date(Date.parse("2022-03-05T00:00:00.000Z"))); // 2022-03-05T00:00:00.000Z

// benchmark
function dateSub(old_date, new_date) {
  return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback) {
  let date_1 = new Date("2022-01-01");
  let date_2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 1000000; i++) {
    callback(date_1, date_2);
  }
  return Date.now() - start;
}

console.log("dateSub : " + benchmark(dateSub) + "ms"); // dateSub : 109ms
console.log("getTimeSub : " + benchmark(getTimeSub) + "ms"); // getTimeSub : 9ms
