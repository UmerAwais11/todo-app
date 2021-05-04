import userDb from "../database/model/user";

class UserRepository {
  //create
  static async add(user) {
    // const response = await user.save(user);
    // return response;
    return await user.save(user);
  }
  static async findUser(username, password) {
    // const user = await userDb.findOne({ name: username, password: password });
    // return user;
    return await userDb.findOne({ name: username, password: password });
  }
}

export default UserRepository;
