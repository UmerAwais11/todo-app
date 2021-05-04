import store from "../../stores/todoStore";
const axios = require("axios");

class TodoService {
  static async redirectToHome() {
    try {
      //const response = await axios.get("http://localhost:3000/api/todos");
      //return response;
      return axios.get("http://localhost:3000/api/todos");
    } catch (error) {}
  }
  static async updateTodoTask(req) {
    try {
      // const todoData = await axios.get("http://localhost:3000/api/toDos", {
      //   params: { id: req.query.id },
      // });
      // return todoData;
      return await axios.get("http://localhost:3000/api/toDos", {
        params: { id: req.query.id },
      });
    } catch (error) {}
  }
  static async createTodoTask(todo) {
    try {
      // const data = await store.add(todo);
      // return data;
      return await store.add(todo);
    } catch (error) {}
  }
  static async fetchAllTodos() {
    try {
      // const todo = await store.fetchAll();
      // return todo;
      return await store.fetchAll();
    } catch (error) {}
  }
  static async fetchTodoById(id) {
    try {
      // const todo = await store.fetchByToDoId(id);
      // return todo;
      return await store.fetchByToDoId(id);
    } catch (error) {}
  }
  static async updateTodo(id, req) {
    try {
      // const data = await store.update(id, req);
      // return data;
      return await store.update(id, req);
    } catch (error) {}
  }
  static async deleteTodo(id) {
    try {
      // const data = await store.remove(id);
      // return data;
      return await store.remove(id);
    } catch (error) {}
  }
}

export default TodoService;
