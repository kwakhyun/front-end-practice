// break
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  text += i;
}
console.log(text); // 01234

// continue
text = "";
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  text += i;
}
console.log(text); // 012346789

// label
end: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
      break end;
    }
  }
  // 0 * 0 = 0