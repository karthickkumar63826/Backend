const path = require("path");
const fs = require("fs");
console.log(path);

console.log(__dirname);
console.log(__filename);
console.log(path.dirname("/01NodeBasicExample/01-example.js"));
console.log(path.basename("/01NodeBasicExample/01-example.js"));
console.log(path.parse("/01NodeBasicExample/areaExample/calculateArea.js"));
console.log(
  path.relative(
    "/01NodeBasicExample/areaExample/calculateArea.js",
    "/01NodeBasicExample/01-example.js"
  )
);
console.log(path.isAbsolute("/01NodeBasicExample/01-example.js"));
console.log(path.resolve("newfile.txt"));

let dirPath = path.join(__dirname, "static", "images");
console.log(dirPath);

fs.mkdir(dirPath, (err) => {
  if (err) console.log(err);
});

fs.writeFile(path.join(dirPath, "mytext.txt"), "Hello...", (err) => {
  if (err) console.log(err);
});
