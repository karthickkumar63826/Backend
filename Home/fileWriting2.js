const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "files", "sample2.txt"),
  "Hi this is an another example for write file code on another file",
  (err) => {
    if (err) throw err;
    console.log("Your content is written successfully");
    fs.appendFile(
      path.join(__dirname, "files", "sample2.txt"),
      "\nThis is an appended content",
      (err) => {
        if (err) throw err;
        console.log("your content is appended successfully");
        fs.rename(
          path.join(__dirname, "files", "sample2.txt"),
          path.join(__dirname, "files", "nextRenamed.txt"),
          (err) => {
            if (err) throw err;
            console.log("your file is renamed successfully");
          }
        );
      }
    );
  }
);
