let items = [
  { id: 1, title: "parker pen", price: 200 },
  { id: 2, title: "Eraser", price: 5 },
  { id: 3, title: "Pencil", price: 10 },
  { id: 4, title: "sharpner", price: 5 },
  { id: 5, title: "water can ", price: 50 },
];

const getItems = (request, response) => {
  console.log(items);
  response.json(items);
};

const getItem = (request, response) => {
  const id = request.params.id;
  const item = items.find((item) => item.id == id);
  if (item) {
    response.json(item);
  } else {
    response.sendStatus("404").end("Item not found");
  }
};

const addItem = (request, response) => {
  console.log(request.body);
  const { title, price } = request.body;

  let newItem = { id: items.length + 1, title: title, price: price };
  items.push(newItem);
  response.end("New item added successfully");
};

const deleteItem = (request, response) => {
  const id = request.params.id;
  items = items.filter((item) => item.id != id);
  console.log(`Item no ${id} is deleted successfully`);
  response.json(items);
};

const editItem = (request, response) => {
  const updatedItem = request.body;
  items = items.map((item) => (item.id == updatedItem.id ? updatedItem : item));
  response.json(items);
};

module.exports = { items, getItems, getItem, addItem, deleteItem, editItem };
