const fs=require("fs");
// Create new file and write content into that
//fs.writeFileSync('Hello.txt',"Welcome to the node world.");

//Append data into file
fs.appendFileSync('notes.txt',"hello ");
// fs.appendFile('asycn.txt','welcome to world ');