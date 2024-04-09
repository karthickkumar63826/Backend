const path = require('path');
const fs = require('fs');


const logger = (req, res, next) => {
  const filePath = path.join(__dirname, "/files/loggerFile.txt");
  const data = req.method + " " + req.url + " " + new Date().toISOString();
  console.log(req.method + " " + req.url + " " + new Date().toISOString());
  fs.appendFile(filePath, data + "\n", (err) => {
    if (err) {
      console.log("Their is some issue");
    }
  });
  next();
};

module.exports = { logger };
