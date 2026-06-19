// const http = require("http")
// const myServer = http.createServer((req, res) => {
//   // console.log(req.headers)
//   // console.log("New Req Received")
//   console.log(req) // whole info about the request and user 
//   res.end("Hello from Server Again")
// });
// myServer.listen(8000, () => console.log("Server started"))

const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Request Received\n`
  fs.appendFile("log.txt", log, (err, data) => {
    // res.end("Hello from Server Again");
    switch(req.url) {
      case '/': res.end("HomePage");
      break;
      case '/about': res.end("I am Vikash");
      break;
      default: res.end("404 Not Found");
    }
  })
})
myServer.listen(8000, () => console.log("Server started"))