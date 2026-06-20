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
const url = require("url")

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: &{req.method} ${req.url} New Request Received\n`
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    // res.end("Hello from Server Again");
    switch(req.url) {
      case '/': 
      if (req.method === "GET") res.end("HomePage");
      break;
      case '/about': 
      const username = myUrl.query.myname;
      res.end(`Hi, ${username}`);
      break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are you results for " + search);
        
        case "/signup":
          if (req.method === "GET") res.end("This is a signup form");
          else if (req.method === "POST") {
            // DB query 
            res.end("Success");
          }
      default: res.end("404 Not Found");
    }
  })
})
myServer.listen(8000, () => console.log("Server started"))