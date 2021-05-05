import TodoEntity from "../Domain/Entities/TodoEntity";
import FetchTodoByIdDTO from "../Application/services/Todo/FetchTodoByIdDTO";
import DeleteTodoDTO from "../Application/services/Todo/DeleteTodoDTO";
import todoList from "../Infrastructure/database/model/todo";

class TodoStore {
  //create
  async add(todo: TodoEntity) {
    return await todoList.create(todo);
  }
  //fetchAllTodos
  async fetchAll() {
    return await todoList.find();
  }
  //findById
  async fetchByToDoId(todo: FetchTodoByIdDTO) {
    return await todoList.findById(todo.id);
  }
  async update(todo: TodoEntity) {
    return await todoList.findByIdAndUpdate(todo.id, todo, {
      useFindAndModify: false,
    });
  }
  //delete
  async remove(todo: DeleteTodoDTO) {
    const data = await todoList.findByIdAndDelete(todo.id);
    return data;
  }
}

export default new TodoStore();
