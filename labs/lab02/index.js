import express from "express";
import routes from "./routes.js";

const PORT = 8000;
const app = express();

app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
