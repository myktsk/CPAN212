import express from "express";

const router = express.Router();

// 3. Create a route /name that renders your name
router.get("/name", (req, res) => {
  res.send("Miyuki Tuisku");
});

// 4. Create a route /greeting that renders your name and student number
router.get("/greeting", (req, res) => {
  res.send("Hi, Miyuki Tuisku - N01581172");
});

// 5. Create route /add that accepts x and y as get params and returns the result
router.get("/add", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (isNaN(x) || isNaN(y)) {
    return res.status(400).send("Invalid numbers");
  }
  res.send(`Result: ${x + y}`);
});

// 6. Create a route /calculate that accepts a, b, and operation to perform (+, -, *, /, **)
router.get("/calculate", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;

  if (isNaN(a) || isNaN(b) || !["+", "-", "*", "/", "**"].includes(operation)) {
    return res.status(400).send("Invalid input");
  }

  let result;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Cannot divide by zero";
      break;
    case "**":
      result = a ** b;
      break;
  }

  res.send(`Result: ${result}`);
});

export default router;
