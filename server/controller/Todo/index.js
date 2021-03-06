const { v4 } = require("uuid");
const todoList = require("../../model/todo");
const TodoService = require("../../services/Todo/TodoService");

class TodoController {
  // fetch all existing todos
  static async homeRoutes(req, res) {
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

  // add todo task
  static addTodoTask(req, res) {
    res.render("add_todotask");
  }

  // update todo task
  static async updateTodoTask(req, res) {
    try {
      const response = await TodoService.updateTodoTask(req);
      if (response) {
        res.render("update_todotask", { todo: response.data });
      }
    } catch (err) {
      res.send(err);
    }
  }

  // create and save new todo-task
  static async create(req, res) {
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
        //res.send(data)
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
  static async find(req, res) {
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
            message: `Cannot find todo-task. Maybe todo-task not found!`,
          });
        } else {
          res.send(todo);
        }
      }
    } catch (err) {
      res.send(err);
    }
  }

  // Update a new identified todo-task by task id
  static async update(req, res) {
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

  // Delete a todo-task with specified task id in the request
  static async delete(req, res) {
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
        message: "Could not delete todo-task with id= " + id,
      });
    }
  }
}
module.exports = TodoController;
