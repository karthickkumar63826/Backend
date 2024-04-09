const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const port = 8000;
const app = express();
app.use(express.static("public/static"));
app.use(express.json());
app.use(cors());

let items = [
  { id: 1, title: "parker pen", price: 200 },
  { id: 2, title: "Eraser", price: 5 },
  { id: 3, title: "Pencil", price: 10 },
  { id: 4, title: "sharpner", price: 5 },
  { id: 5, title: "water can ", price: 50 },
];

const logger = (req, res, next) => {
  const filePath = path.join(__dirname, "/files/loggerFile.txt");
  const data = req.method + " " + req.url + " " + new Date().toISOString();
  console.log(req.method + " " + req.url + " " + new Date().toISOString());
  fs.appendFile(filePath, data + "\n", (err) => {
    if (err) {
      console.log("Their is some issue");
    }
  });
  next();
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/static/images");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", logger, upload.single("file"), (request, response) => {
  if (!request.file) {
    return response.status(400).send("No file were uploaded");
  }
  response.json(request.file);
});

app.get("/", logger, (request, response) => {
  response.end("Welcome to our new server");
});

app.get("/api/items", logger, (request, response) => {
  console.log(items);
  response.json(items);
});

app.get("/api/items/:id", logger, (request, response) => {
  const id = request.params.id;
  const item = items.find((item) => item.id == id);
  if (item) {
    response.json(item);
  } else {
    response.sendStatus("404").end("Item not found");
  }
});

app.post("/api/addItem", logger, (request, response) => {
  console.log(request.body);
  const { title, price } = request.body;

  let newItem = { id: items.length + 1, title: title, price: price };
  items.push(newItem);
  response.end("New item added successfully");
});

app.delete("/api/items/:id", logger, (request, response) => {
  const id = request.params.id;
  items = items.filter((item) => item.id != id);
  console.log(`Item no ${id} is deleted successfully`);
  response.json(items);
});

app.put("/api/items", logger, (request, response) => {
  const updatedItem = request.body;
  items = items.map((item) => (item.id == updatedItem.id ? updatedItem : item));
  response.json(items);
});

let users = [
  {
    firstname: "jhon",
    lastname: " smith",
    email: "jhonsmith@gmail.com",
    password: "jhon123",
  },
];

app.post("/register", logger, (request, response) => {
  const user = request.body;

  if (
    user.email == "" ||
    user.password == "" ||
    user.email === undefined ||
    user.password === undefined
  ) {
    response.status(401).send("Email/passwordcannot be null");
    console.log("Email/passwordcannot be null");
  } else {
    users.push(user);
    response.send("Registered successfully... ");
    console.log("Registered successfully");
  }
});

app.post("/login", logger, (request, response) => {
  const login = request.body;

  if (
    users.find(
      (user) => user.email === login.email && user.password === login.password
    )
  ) {
    response.send("Logged in successfully");
  } else {
    response.status(401);
    response.send("Invalid/ email or password");
  }
});

app.get("/users", logger, (request, response) => {
  response.json(users);
  console.log(users);
});

app.listen(port, () => {
  console.log("server is started successfully...");
});
