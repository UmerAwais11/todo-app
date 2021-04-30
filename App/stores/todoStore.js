const { v4 } = require("uuid");
const userDb = require("../database/model/user");
const todoList = require("../database/model/todo");

class TodoRepository {
  //create
  static async add(todo) {
    const data = await todoList.create(todo);
    return data;
  }
  //fetchAllTodos
  static async fetchAll() {
    const todo = await todoList.find();
    return todo;
  }
  //findById
  static async fetchByToDoId(id) {
    const todo = await todoList.findById(id);
    return todo;
  }
  static async update(id, req) {
    const data = await todoList.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
    return data;
  }
  //delete
  static async remove(id) {
    const data = await todoList.findByIdAndDelete(id);
    return data;
  }
}

module.exports = TodoRepository;
