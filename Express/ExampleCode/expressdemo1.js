const express = require("express");
const app = express();
const cors = require("cors");

// console.log(app);

app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
  response.end("Hello World");
});

app.get("/greeting", (request, response) => {
  response.end("Welcome to express demo....");
});
app.post("/data", (request, response) => {
  console.log(request.body);
  response.end("Post method demo");
});

app.get("/echo", (request, response) => {
  const input = request.query.input;
  console.log(input);
  response.json({
    input: input,
    capitalize: input.toUpperCase(),
    "content-length": input.length,
    reverse: input.split("").reverse().join(""),
  });
});

app.get("/welcome/:name", (request, response) => {
  const name = request.params.name;
  response.end("welcome" + name);
});

app.post("/add", (request, response) => {
  const { number1, number2 } = request.body;
  let sum = number1 + number2;
  response.json({ "Number 1": number1, "Number 2": number2, Sum: sum });
});

app.post("/sub", (request, response) => {
  const { number1, number2 } = request.body;
  let sub = number1 - number2;
  response.json({ "Number 1": number1, "Number 2": number2, Sub: sub });
});

app.post("/mul", (request, response) => {
  const { number1, number2 } = request.body;
  let mul = number1 * number2;
  response.json({ "Number 1": number1, "Number 2": number2, Mul: mul });
});

app.post("/div", (request, response) => {
  const { number1, number2 } = request.body;
  let div = number1 / number2;
  response.json({ "Number 1": number1, "Number 2": number2, Div: div });
});

app.listen(8000, () => {
  console.log("listening to port number 8000");
});
