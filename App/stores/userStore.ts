import userDb from "../database/model/user";

class UserRepository {
  //create
  async add(user) {
    // const response = await user.save(user);
    // return response;
    return await user.save(user);
  }
  async findUser(username, password) {
    // const user = await userDb.findOne({ name: username, password: password });
    // return unew ser;
    return await userDb.findOne({ name: username, password: password });
  }
}

export default new UserRepository();
