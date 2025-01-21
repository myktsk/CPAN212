import http from "http"; //new import syntax for ES6 (set up type: module in package.json)
// const http = require("http"); //old import syntax
import fs from "fs";

const app = http.createServer((request, response) => {
  if (request.url === "/") {
    const homeHtml = fs.readFileSync("./home.html", "utf8");
    response.end(homeHtml);
  } else if (request.url === "/about") {
    response.end('<h1 style="color: red;">About</h1>');
  } else if (request.url === "/user/account/id") {
    response.end("<h1>User Account</h1>");
  } else {
    response.end("<h1>404 Page Not Found</h1>");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
