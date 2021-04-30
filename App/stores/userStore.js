const { v4 } = require("uuid");
const userDb = require("../database/model/user");

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

module.exports = UserRepository;
