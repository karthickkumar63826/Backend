const fs = require("fs");
const path = require("path");

const readingFile = (readFile) => {
  readFile(
    path.join(__dirname, "files", "renamedFile.txt"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    }
  );
};

readingFile(fs.readFile);
