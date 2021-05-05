import UserEntity from "../../../Domain/Entities/UserEntity";

class FetchUserDTO {
  public username: string;
  public password: string;

  constructor(request) {
    const params = request.body;
    this.username = params.name;
    this.password = params.password;
  }
}

export default FetchUserDTO;
