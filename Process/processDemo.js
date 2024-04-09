const fs = require("fs");
console.log(process);
process.stdin.setEncoding("utf-8");
process.stdin.on("data", (data) => {
  console.log("entered data " + data);
  fs.appendFile("userinput.txt", `${data}\n`, (err) => {
    if (err) console.log("cannot write into the file");
  });

  if (data.trim === "exit") process.exit();
});

process.stdout.write("Hello from process stdout\n");
process.stderr.write("Process stderr\n");
