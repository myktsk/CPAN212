import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = http.createServer((request, response) => {
  const { url } = request;

  if (url === "/") {
    const homeHTML = fs.readFileSync(
      path.join(__dirname, "pages", "home.html"),
      "utf8"
    );
    response.end(homeHTML);
  } else if (url === "/about") {
    const aboutPage = fs.readFileSync(
      path.join(__dirname, "pages", "about.html"),
      "utf8"
    );
    response.end(aboutPage);
  } else if (url === "/book") {
    const bookPage = fs.readFileSync(
      path.join(__dirname, "pages", "bookDetail.html"),
      "utf8"
    );
    response.end(bookPage);
  } else {
    const notFoundPage = fs.readFileSync(
      path.join(__dirname, "pages", "404.html"),
      "utf8"
    );
    response.end(notFoundPage);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
