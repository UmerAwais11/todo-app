const { v4 } = require("uuid");
const userDb = require("../model/user");

class UserRepository {
  static async create(user) {
    const response = await user.save(user);
    return response;
  }
  static async findUser(username, password) {
    const user = await userDb.findOne({ name: username, password: password });
    return user;
  }
}

module.exports = UserRepository;
