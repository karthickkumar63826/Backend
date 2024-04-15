const fs = require("fs");

const readingFile = () => {
  try {
    console.log("started reading");
    const data = fs.readFileSync("sample.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

console.log("start");
readingFile();
console.log("end");
