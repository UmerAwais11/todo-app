const { v4 } = require("uuid");
const userDb = require("../../database/model/user");
const store = require("../../stores/userStore");
const axios = require("axios");

class UserService {
  static async createUser(user) {
    try {
      const response = await store.add(user);
      return response;
    } catch (error) {
      res.send(error);
    }
  }
  static async findUser(req, res) {
    try {
      const username = req.body.name;
      const password = req.body.password;
      const user = await store.findUser(username, password);
      return user;
    } catch (error) {}
  }
}

module.exports = UserService;
