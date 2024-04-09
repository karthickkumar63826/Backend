const fs = require("fs");

console.log("Start");

const writingFile = () => {
  try {
    fs.writeFileSync("sample1.txt", "Hello World! from Syncronized ");
    console.log("file is created successfully")
  } catch (error) {
    console.log(error);
  }
};

writingFile();

console.log("end");