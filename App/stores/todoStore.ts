import todoList from "../database/model/todo";

class TodoRepository {
  //create
  async add(todo) {
    // const data = await todoList.create(todo);
    // return data;
    return await todoList.create(todo);
  }
  //fetchAllTodos
  async fetchAll() {
    // const todo = await todoList.find();
    // return todo;
    return await todoList.find();
  }
  //findById
  async fetchByToDoId(id) {
    // const todo = await todoList.findById(id);
    // return todo;
    return await todoList.findById(id);
  }
  async update(id, req) {
    // const data = await todoList.findByIdAndUpdate(id, req.body, {
    //   useFindAndModify: false,
    // });
    // return data;
    return await todoList.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
  }
  //delete
  async remove(id) {
    // const data = await todoList.findByIdAndDelete(id);
    // return data;
    return await todoList.findByIdAndDelete(id);
  }
}

export default new TodoRepository();
