import UserEntity from "../../../Domain/Entities/UserEntity";

class CreateUserDTO {
  public user: UserEntity;

  constructor(request) {
    const params = request.body;
    params.id = UserEntity.generateId();
    this.user = new UserEntity(
      params.id,
      params.name,
      params.password,
      params.status
    );

    //this.user = UserEntity.createFromInput(params);
  }
}

export default CreateUserDTO;
