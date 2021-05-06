import TodoEntity from "../../../Domain/Entities/TodoEntity";

class CreateTodoDTO {
  public todo: TodoEntity;

  constructor(request) {
    const params = request.body;
    params.id = TodoEntity.generateId();
    this.todo = new TodoEntity(
      params.id,
      params.name,
      params.description,
      params.priority,
      params.status
    );
    //this.todo = TodoEntity.createFromInput(params);
  }
}

export default CreateTodoDTO;
