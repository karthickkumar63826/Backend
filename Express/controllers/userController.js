let users = [
  {
    firstname: "jhon",
    lastname: " smith",
    email: "jhonsmith@gmail.com",
    password: "jhon123",
  },
];

const registerHandler = (request, response) => {
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
};

const loginHandler = (request, response) => {
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
};

const getUser = (request, response) => {
  response.json(users);
  console.log(users);
};

module.exports = { registerHandler, loginHandler, getUser };
