const todoFactory = require("../../../Infrastructure/factories/todoFactory");
import logger from "../../../Infrastructure/Logger/logger";
import CreateTodoDTO from "./CreateTodoDTO";
import FetchTodoByIdDTO from "./FetchTodoByIdDTO";
import UpdateTodoByIdDTO from "./UpdateTodoDTO";
import DeleteTodoDTO from "./DeleteTodoDTO";
const store = todoFactory.buildToDoStore();

class TodoService {
  async createTodoTask(createTodoDTO: CreateTodoDTO) {
    try {
      return await store.add(createTodoDTO.todo);
    } catch (error) {
      logger.error(
        `Unable to create todo task because of the following error [ ${error} ]`
      );
    }
  }
  async fetchAllTodos() {
    try {
      return await store.fetchAll();
    } catch (error) {
      logger.error(
        `Unable to get all todo tasks because of the following error [ ${error} ]`
      );
    }
  }
  async fetchTodoById(fetchTodoByIdDTO: FetchTodoByIdDTO) {
    try {
      return await store.fetchByToDoId(fetchTodoByIdDTO);
    } catch (error) {
      logger.error(
        `Unable to get todo task because of the following error [ ${error} ]`
      );
    }
  }
  async updateTodo(updateTodoByIdDTO: UpdateTodoByIdDTO) {
    try {
      return await store.update(updateTodoByIdDTO.todo);
    } catch (error) {
      logger.error(
        `Unable to update todo task because of the following error [ ${error} ]`
      );
    }
  }
  async deleteTodo(deleteTodoDTO: DeleteTodoDTO) {
    try {
      return await store.remove(deleteTodoDTO);
    } catch (error) {
      logger.error(
        `Unable to delete todo task because of the following error [ ${error} ]`
      );
    }
  }
}

export default new TodoService();
