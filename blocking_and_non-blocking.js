const fs  = require("fs")

// console.log("1")  // this is blocking means Sync... it assing the thread for each request 
// const result = fs.readFileSync("./contacts.txt", "utf-8") 
// console.log(result)

// console.log("2") 


// console.log("1")

// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//   console.log(result)
// })

// console.log("2")  // In async all console print first then fs file becz it takes time and it handle as much required requests but Sync.. function not.
// console.log("3")


// Default thread Pool size = 4
// Max? - 8 core cpu = Max 8 threads

const os = require("os")
console.log(os.cpus().length) // this is function for checking the threads of your system