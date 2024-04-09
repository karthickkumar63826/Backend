const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { logger } = require("./logger");
const { itemRouter } = require("./Router/itemRouter");
const { userRouter } = require("./Router/userRouter");

const app = express();
app.use(express.static("public/static"));
app.use(express.json());
app.use(cors());
app.use(logger);
app.use(morgan("dev"));

app.use("/items", itemRouter);
app.use("/users", userRouter);

app.listen(8000, () => {
  console.log("Server is running on the port no 8000...");
});
