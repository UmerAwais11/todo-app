const { v4 } = require("uuid");
const userDb = require("../../../server/model/user");
const UserService = require("../../../server/services/User/UserService");

class UserController {
  //redirect to login form
  static loginForm(req, res) {
    res.render("login");
  }

  static async createUser(req, res) {
    try {
      const user = new userDb({
        id: v4(),
        name: req.body.name,
        password: req.body.password,
      });
      const userData = await UserService.createUser(user);
      if (userData) {
        return res.redirect("/");
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a user",
      });
    }
  }
  static async findUser(req, res) {
    //const{name : username , password}= req.body
    try {
      const user = await UserService.findUser(req, res);
      if (!user) {
        return res.render("login");
      }
      req.session.user = user;
      console.log("LOGIN CREDENTIALS 1: ", req.session.user);
      res.redirect("/");
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Server Responded with an error" });
    }
  }
}
module.exports = UserController;
