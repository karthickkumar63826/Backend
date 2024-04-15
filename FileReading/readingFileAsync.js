const fs = require("fs");

console.log('start')

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log('started Reading')
  console.log(data);
  
});
console.log("ended Reading")
