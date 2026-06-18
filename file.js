const fs = require("fs")

// this is Synchronous call
// fs.writeFileSync("./test.txt", "Hey there"); // when we will chnage there the text it will override


// Asynchronous 
// fs.writeFile("./test.txt", "Hello World Async", (err)=> {}); both function for write the file


// Read the file

// const result = fs.readFileSync("./contacts.txt", "utf-8") this is Sync way to read the file
// console.log(result)

// fs.readFile("./contacts.txt", "utf-8", (err, data) => {  // This is Async way to read file
//   if(err) {
//     console.log("ERROR : ", err)
//   } else {
//     console.log(data)
//   }
// })
 

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());


console.log(fs.statSync("./test.txt"));