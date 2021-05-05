import BaseEntity from "./BaseEntity";

class UserEntity extends BaseEntity {
  public id: string;
  public name: string;
  public password: string;
  public status: string;

  constructor(id: string, name: string, password: string, status: string) {
    super();
    this.id = id;
    this.name = name;
    this.password = password;
    this.status = status;
  }
  static createFromInput(obj): UserEntity {
    const user = new UserEntity(obj.id, obj.name, obj.password, obj.status);
    return user;
  }
}

export default UserEntity;
