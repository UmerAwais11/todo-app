import TodoEntity from "../../../Domain/Entities/TodoEntity";

class UpdateTodoByIdDTO {
  public todo: TodoEntity;

  constructor(request) {
    const params = request.body;
    params.id = request.params.id;
    this.todo = TodoEntity.createFromInput(params);
  }
}

export default UpdateTodoByIdDTO;
