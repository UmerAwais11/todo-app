import * as express from "express";
import TodoController from "../Controller/Todo/index";
import UserController from "../Controller/User/index";
const route = express.Router();

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

export default route;
