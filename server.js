const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/secret") {
    res.end("not right page");
  }
  res.end("hello world");
});

const port = 7777;
server.listen(port);
