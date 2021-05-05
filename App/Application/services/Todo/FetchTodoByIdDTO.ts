import TodoEntity from "../../../Domain/Entities/TodoEntity";

class FetchTodoByIdDTO {
  public id: string;

  constructor(request) {
    const params = request.body;
    this.id = request.query.id;
  }
}

export default FetchTodoByIdDTO;
