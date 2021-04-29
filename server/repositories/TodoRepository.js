const { v4 } = require("uuid");
const userDb = require("../model/user");
const todoList = require("../model/todo");

class TodoRepository {
  static async create(todo) {
    const data = await todoList.create(todo);
    return data;
  }
  static async fetchAllTodos() {
    const todo = await todoList.find();
    return todo;
  }
  static async findById(id) {
    const todo = await todoList.findById(id);
    return todo;
  }
  static async update(id, req) {
    const data = await todoList.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
    return data;
  }
  static async delete(id) {
    const data = await todoList.findByIdAndDelete(id);
    return data;
  }
}

module.exports = TodoRepository;
