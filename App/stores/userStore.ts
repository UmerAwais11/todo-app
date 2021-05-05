import UserEntity from "../Domain/Entities/UserEntity";
import FetchUserDTO from "../Application/services/User/FetchUserDTO";
import userDb from "../Infrastructure/database/model/user";

class UserStore {
  //create
  async add(user: UserEntity) {
    return await userDb.create(user);
  }
  async findUser(user: FetchUserDTO) {
    return await userDb.findOne({
      name: user.username,
      password: user.password,
    });
  }
}

export default new UserStore();
