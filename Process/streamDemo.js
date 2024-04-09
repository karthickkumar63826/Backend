const stream = require("stream");
const fs = require("fs");
const tunnel = new stream.PassThrough();
const readStream = fs.createReadStream("newfile.txt");
const writeStream = fs.createWriteStream("copynewFile.txt");
tunnel.on("data", (data) => {
  console.log(data.toString());
});

readStream.pipe(tunnel).pipe(writeStream);
readStream.on("error", (error) => {
  console.log(error);
});

writeStream.on("error", (error) => {
  console.log("error");
});
