import CreateUserDTO from "../../../App/Application/services/User/CreateUserTodo";
import FetchUserDTO from "../../../App/Application/services/User/FetchUserDTO";
import UserService from "../../../App/Application/services/User/userService";
import logger from "../../../App/Infrastructure/Logger/logger";

class UserController {
  //redirect to login form
  loginForm(res) {
    res.render("login");
  }

  async createUser(req) {
    try {
      const input = new CreateUserDTO(req);
      return await UserService.createUser(input);
    } catch (error) {
      logger.error(
        `Unable to create user because of the following error [ ${error} ]`
      );
    }
  }
  async findUser(req, res) {
    try {
      const input = new FetchUserDTO(req);
      const user = await UserService.findUser(input);
      if (!user) {
        return res.render("login");
      }
      req.session.user = user;
      logger.info(`LOGIN CREDENTIALS 1: ${req.session.user}`);
      res.redirect("/");
    } catch (error) {
      logger.error(
        `Unable to find user because of the following error [ ${error} ]`
      );
    }
  }
}
export default new UserController();
