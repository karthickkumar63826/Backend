const express = require("express");
const userRouter = express.Router();
const {
  registerHandler,
  loginHandler,
  getUser,
} = require("../controllers/userController");

userRouter.post("/register", registerHandler);
userRouter.post("/login", loginHandler);
userRouter.get("/", getUser);

module.exports = { userRouter };
