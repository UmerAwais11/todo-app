//const { v4 } = require("uuid");
import { v4 } from "uuid";
import todoList from "../../../App/database/model/todo";
import TodoService from "../../../App/services/Todo/todoService";

class TodoController {
  // fetch all existing todos
  async homeRoutes(req, res) {
    console.log("LOGIN CREDENTIALS: ", req.session.user);
    try {
      if (!req.session.user) {
        res.render("login");
      } else {
        // Make a get request to /api/todos
        const response = await TodoService.redirectToHome();
        if (response) {
          res.render("index", { todos: response.data });
        }
      }
    } catch (err) {
      res.send(err);
    }
  }

  addTodoTask(req, res) {
    res.render("add_todotask");
  }

  async updateTodoTask(req, res) {
    try {
      const response = await TodoService.updateTodoTask(req);
      if (response) {
        res.render("update_todotask", { todo: response.data });
      }
    } catch (err) {
      res.send(err);
    }
  }

  async create(req, res) {
    try {
      const todo = new todoList({
        id: v4(),
        name: req.body.name,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
      });
      const response = await TodoService.createTodoTask(todo);
      if (response) {
        res.redirect("/add-todotask");
      }
      return;
    } catch (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    }
  }

  // retrieve and return all todos / retrieve and return a single todo-task
  async find(req, res) {
    try {
      if (req.query.id) {
        const id = req.query.id;
        const todo = await TodoService.fetchTodoById(id);
        if (!todo) {
          res
            .status(404)
            .send({ message: "Todo-task not found with id " + id });
        } else {
          res.send(todo);
        }
      } else {
        const todo = await TodoService.fetchAllTodos();
        if (!todo) {
          res.status(404).send({
            message: `Cannot find any todo-task.`,
          });
        } else {
          res.send(todo);
        }
      }
    } catch (err) {
      res.send(err);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const data = await TodoService.updateTodo(id, req);
      if (!data) {
        res.status(404).send({
          message: `Cannot Update todo-task with ${id}. Maybe todo-task not found!`,
        });
      } else {
        res.send(data);
      }
    } catch (err) {
      res.status(500).send({ message: "Error updating todo-task information" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const data = await TodoService.deleteTodo(id);
      if (!data) {
        res.status(404).send({
          message: `Cannot Delete with id ${id}. Maybe id is wrong`,
        });
      } else {
        res.send({
          message: "Todo-task was deleted successfully!",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: "Could not delete todo-task ",
      });
    }
  }
}
export default new TodoController();
