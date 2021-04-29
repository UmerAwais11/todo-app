const { v4 } = require("uuid");
const userDb = require("../../model/user");
const UserRepository = require("../../repositories/UserRepository");
const axios = require("axios");

class UserService {
  static async createUser(user) {
    try {
      const response = await UserRepository.create(user);
      return response;
    } catch (error) {
      res.send(error);
    }
  }
  static async findUser(req, res) {
    try {
      const username = req.body.name;
      const password = req.body.password;
      const user = await UserRepository.findUser(username, password);
      return user;
    } catch (error) {}
  }
}

module.exports = UserService;
