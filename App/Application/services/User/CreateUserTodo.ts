import UserEntity from "../../../Domain/Entities/UserEntity";

class CreateUserDTO {
  public user: UserEntity;

  constructor(request) {
    const params = request.body;
    params.id = UserEntity.generateId();

    this.user = UserEntity.createFromInput(params);
  }
}

export default CreateUserDTO;
