import BaseEntity from "./BaseEntity";

class TodoEntity extends BaseEntity {
  public id: string;
  public name: string;
  public description: string;
  public priority: string;
  public status: string;

  constructor(
    id: string,
    name: string,
    description: string,
    priority: string,
    status: string
  ) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.status = status;
  }

  static createFromInput(obj): TodoEntity {
    const todo = new TodoEntity(
      obj.id,
      obj.name,
      obj.description,
      obj.priority,
      obj.status
    );
    return todo;
  }
}

export default TodoEntity;
