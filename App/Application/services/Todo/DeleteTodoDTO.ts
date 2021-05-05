import TodoEntity from "../../../Domain/Entities/TodoEntity";

class DeleteTodoDTO {
  public id: string;

  constructor(request) {
    this.id = request.params.id;
  }
}

export default DeleteTodoDTO;
