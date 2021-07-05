import todoList from "../../database/models/sequelize/todo";
import FetchTodoByIdDTO from "../../../Application/services/Todo/FetchTodoByIdDTO";
import TodoEntity from "../../../Domain/Entities/TodoEntity";
import DeleteTodoDTO from "../../../Application/services/Todo/DeleteTodoDTO";

const ToDo = require("../../database/models/sequelize/todo");
const ToDoEntity = require("../../../Domain/Entities/TodoEntity");

class SequelizeToDoStore {
    async add(toDo) {
        const newToDo = await ToDo.create(toDo);
        return ToDoEntity.createFromInput(newToDo);
    }
    //fetchAllTodos
    async fetchAll() {
        return await todoList.findAll();
    }
    //findById
    async fetchByToDoId(todo: FetchTodoByIdDTO) {
        return await todoList.findOne({where: {id: todo.id,}});
    }
    async update(todo: TodoEntity) {
        return await todoList.update(todo, {where: {id: todo.id,}});
    }
    //delete
    async remove(todo: DeleteTodoDTO) {
        const data = await todoList.destroy({where: {id: todo.id,}});
        return data;
    }

}
export default new SequelizeToDoStore();