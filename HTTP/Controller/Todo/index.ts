import CreateTodoDTO from "../../../App/Application/services/Todo/CreateTodoDTO";
import FetchTodoByIdDTO from "../../../App/Application/services/Todo/FetchTodoByIdDTO";
import UpdateTodoDTO from "../../../App/Application/services/Todo/UpdateTodoDTO";
import DeleteTodoDTO from "../../../App/Application/services/Todo/DeleteTodoDTO";
import TodoService from "../../../App/Application/services/Todo/todoService";
import logger from "../../../App/Infrastructure/Logger/logger";

class TodoController {
  // fetch all existing todos
  async homeRoutes(req, res) {
    logger.info(`LOGIN CREDENTIALS: ${req.session.user}`);
    try {
      if (!req.session.user) {
        res.render("login");
      } else {
        const todo = await TodoService.fetchAllTodos();
        if (todo) {
          res.render("index", { todos: todo });
        }
      }
    } catch (error) {
      logger.error(
        `Unable to redirect to home because of following error [ ${error} ]`
      );
    }
  }

  addTodoTask(req, res) {
    res.render("add_todotask");
  }

  async updateTodoTask(req, res) {
    try {
      const input = new FetchTodoByIdDTO(req);
      const todo = await TodoService.fetchTodoById(input);
      if (todo) {
        res.render("update_todotask", { todo: todo });
      }
    } catch (error) {
      logger.error(
        `Unable to get todo task because of following error [ ${error} ]`
      );
    }
  }

  async create(req, res) {
    try {
      const input = new CreateTodoDTO(req);
      const todo = await TodoService.createTodoTask(input);
      if (todo) {
        res.redirect("/add-todotask");
      }
      return;
    } catch (error) {
      logger.error(
        `Unable to update todo task because of following error [ ${error} ]`
      );
    }
  }

  async find(req, res) {
    try {
      if (req.query.id) {
        const input = new FetchTodoByIdDTO(req);
        const todo = await TodoService.fetchTodoById(input);
        if (!todo) {
          res
            .status(404)
            .send({ message: "Todo-task not found with id " + todo });
        } else {
          return todo;
        }
      } else {
        const todo = await TodoService.fetchAllTodos();
        if (!todo) {
          res.status(404).send({
            message: `Cannot find any todo-task.`,
          });
        } else {
          return todo;
        }
      }
    } catch (error) {
      logger.error(
        `Unable to find todo task because of following error [ ${error} ]`
      );
    }
  }

  async update(req, res) {
    try {
      const input = new UpdateTodoDTO(req);
      const data = await TodoService.updateTodo(input);
      if (!data) {
        res.status(404).send({
          message: `Cannot Update todo-task.`,
        });
      } else {
        res.send(data);
      }
    } catch (error) {
      logger.error(
        `Unable to update todo task because of following error [ ${error} ]`
      );
    }
  }

  async delete(req, res) {
    try {
      const input = new DeleteTodoDTO(req);
      const data = await TodoService.deleteTodo(input);
      if (!data) {
        res.status(404).send({
          message: `Cannot Delete with id ${input}. Maybe id is wrong`,
        });
      } else {
        res.send({
          message: "Todo-task was deleted successfully!",
        });
      }
    } catch (error) {
      logger.error(
        `Unable to delete todo task because of following error [ ${error} ]`
      );
    }
  }
}
export default new TodoController();
