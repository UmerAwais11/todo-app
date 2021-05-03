import userDb from "../database/model/user";

class UserRepository {
  //create
  static async add(user) {
    const response = await user.save(user);
    return response;
  }
  static async findUser(username, password) {
    const user = await userDb.findOne({ name: username, password: password });
    return user;
  }
}

export default UserRepository;
