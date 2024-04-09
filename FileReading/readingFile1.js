const fs = require("fs");
const readStream = fs.createReadStream("sample.txt", "utf-8");
const writeStream = fs.createWriteStream("newfile.txt", "utf-8");

readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("End");
});

readStream.on("error", (error) => {
  console.log(error);
});

writeStream.on("error", (error) => {
  console.log(error);
});
