const express = require("express");
const itemRouter = express.Router();
const {
  getItems,
  addItem,
  deleteItem,
  editItem,
  getItem,
} = require("../controllers/itemController");

itemRouter.get("/api/items", getItems);
itemRouter.get("/api/items/:id", getItem);
itemRouter.post("/api/addItem", addItem);
itemRouter.delete("/api/items/:id", deleteItem);
itemRouter.put("/api/items", editItem);

module.exports = { itemRouter };
