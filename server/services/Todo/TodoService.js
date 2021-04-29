const { v4 } = require("uuid");
const todoList = require("../../model/todo");
const TodoRepository = require("../../repositories/TodoRepository");
const axios = require("axios");

class TodoService {
  static async redirectToHome() {
    try {
      const response = await axios.get("http://localhost:3000/api/todos");
      return response;
    } catch (error) {
      res.send(error);
    }
  }
  static async updateTodoTask(req) {
    try {
      const todoData = await axios.get("http://localhost:3000/api/toDos", {
        params: { id: req.query.id },
      });
      return todoData;
    } catch (error) {
      res.send(error);
    }
  }
  static async createTodoTask(todo) {
    const data = await TodoRepository.create(todo);
    return data;
  }
  static async fetchAllTodos() {
    try {
      const todo = await TodoRepository.fetchAllTodos();
      return todo;
    } catch (error) {
      res.send(error);
    }
  }
  static async fetchTodoById(id) {
    try {
      const todo = await TodoRepository.findById(id);
      return todo;
    } catch (error) {
      res.send(error);
    }
  }
  static async updateTodo(id, req) {
    try {
      const data = await TodoRepository.update(id, req);
      return data;
    } catch (error) {
      res.send(error);
    }
  }
  static async deleteTodo(id) {
    try {
      const data = await TodoRepository.delete(id);
      return data;
    } catch (error) {}
  }
}

module.exports = TodoService;
