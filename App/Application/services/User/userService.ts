import logger from "../../../Infrastructure/Logger/logger";
import store from "../../../Infrastructure/stores/userStore";
import CreateUserDTO from "./CreateUserTodo";
import FetchUserDTO from "./FetchUserDTO";
import UserEntity from "../../../Domain/Entities/UserEntity";

class UserService {

  async authUser (params) {
    try{
      const userIsPresent = await store.findUser(params);
      if (userIsPresent) {
        return userIsPresent;
      }
      const user = UserEntity.createFromInput(params);
      const newUser = await store.add(user);
      return newUser;
    }
    catch (error){
      logger.error(
          `Unable to authenticate user because of the following error [ ${error} ]`
      );
    }
  };


  async createUser(createUserDTO: CreateUserDTO) {
    try {
      return await store.add(createUserDTO.user);
    } catch (error) {
      logger.error(
        `Unable to create user because of the following error [ ${error} ]`
      );
    }
  }
  async findUser(fetchUserDTO: FetchUserDTO) {
    try {
      return await store.findUser(fetchUserDTO);
    } catch (error) {
      logger.error(
        `Unable to find user because of the following error [ ${error} ]`
      );
    }
  }
}

export default new UserService();
