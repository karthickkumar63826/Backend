const { EventEmitter } = require("stream");
const MyEvent = new EventEmitter();

let value = 11;
let balance = 1000;

// MyEvent.on("EvenEmit", () => {
//   console.log("Even Number");
// });

// MyEvent.on("OddEmit", () => {
//   console.log("Odd Number");
// });

// if (value % 2 == 0) {
//   MyEvent.emit("EventEmit");
// } else {
//   MyEvent.emit("OddEmit");
// }

MyEvent.on("InsufficientBalance", () => {
  console.log("balance is insufficient");
});

MyEvent.on("AmountCredited", () => {
  console.log("Amount credited");
});

MyEvent.on("AmountDebited", () => {
  console.log("Amount Debited");
});

function widthdraw(amount) {
  if (balance > amount) {
    balance = balance - amount;
    MyEvent.emit("AmountDebited");
    console.log(`balance after withdraw ${amount} is ${balance}`);
  } else {
    MyEvent.emit("InsufficientBalance");
  }
}

function deposit(amount) {
  balance = balance + amount;
  MyEvent.emit("AmountCredited");
  console.log(`balance after credited ${amount} is ${balance}`);
}

deposit(1000);

widthdraw(2500);
