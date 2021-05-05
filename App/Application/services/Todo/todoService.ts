import store from "../../../stores/todoStore";
import logger from "../../../Infrastructure/Logger/logger";
import CreateTodoDTO from "./CreateTodoDTO";
import FetchTodoByIdDTO from "./FetchTodoByIdDTO";
import UpdateTodoByIdDTO from "./UpdateTodoDTO";
import DeleteTodoDTO from "./DeleteTodoDTO";

class TodoService {
  async createTodoTask(input: CreateTodoDTO) {
    try {
      return await store.add(input.todo);
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
  async fetchTodoById(input: FetchTodoByIdDTO) {
    try {
      return await store.fetchByToDoId(input);
    } catch (error) {
      logger.error(
        `Unable to get todo task because of the following error [ ${error} ]`
      );
    }
  }
  async updateTodo(input: UpdateTodoByIdDTO) {
    try {
      return await store.update(input.todo);
    } catch (error) {
      logger.error(
        `Unable to update todo task because of the following error [ ${error} ]`
      );
    }
  }
  async deleteTodo(input: DeleteTodoDTO) {
    try {
      return await store.remove(input);
    } catch (error) {
      logger.error(
        `Unable to delete todo task because of the following error [ ${error} ]`
      );
    }
  }
}

export default new TodoService();
