import logger from "../../../Infrastructure/Logger/logger";
import store from "../../../stores/userStore";
import CreateUserDTO from "./CreateUserTodo";
import FetchUserDTO from "./FetchUserDTO";

class UserService {
  async createUser(input: CreateUserDTO) {
    try {
      return await store.add(input.user);
    } catch (error) {
      logger.error(
        `Unable to create user because of the following error [ ${error} ]`
      );
    }
  }
  async findUser(input: FetchUserDTO) {
    try {
      return await store.findUser(input);
    } catch (error) {
      logger.error(
        `Unable to find user because of the following error [ ${error} ]`
      );
    }
  }
}

export default new UserService();
