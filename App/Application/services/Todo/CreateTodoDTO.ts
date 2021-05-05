import TodoEntity from "../../../Domain/Entities/TodoEntity";

class CreateTodoDTO {
  public todo: TodoEntity;

  constructor(request) {
    const params = request.body;
    params.id = TodoEntity.generateId();

    this.todo = TodoEntity.createFromInput(params);
  }
}

export default CreateTodoDTO;
