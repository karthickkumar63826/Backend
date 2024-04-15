const fs = require('fs');

console.log("start");

const writingFile = () =>{
  try{
    fs.writeFileSync('sampl.txt', "Writing new content for this text file", "utf-8");
    console.log("Content is written successfully");
  }
  catch(err){
    console.log(err);
  }
}

writingFile();

console.log("end");