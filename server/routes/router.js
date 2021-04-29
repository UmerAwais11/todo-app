const express = require("express");
const route = express.Router();
const TodoController = require("../controller/Todo/index");
const UserController = require("../controller/User/index");

// APIs
route.get("/", TodoController.homeRoutes);
route.get("/add-todotask", TodoController.addTodoTask);
route.get("/update-todotask", TodoController.updateTodoTask);
route.get("/api/login", UserController.loginForm);
route.post("/api/login", UserController.findUser);
route.post("/api/createUser", UserController.createUser);
route.post("/api/todos", TodoController.create);
route.get("/api/todos", TodoController.find);
route.put("/api/todos/:id", TodoController.update);
route.delete("/api/todos/:id", TodoController.delete);

module.exports = route;
