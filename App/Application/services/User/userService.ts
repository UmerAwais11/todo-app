import logger from "../../../Infrastructure/Logger/logger";
const JwtAuthService = require("../../Infrastructure/services/jwtAuthService");
const userFactory = require("../../../Infrastructure/factories/userFactory");
import CreateUserDTO from "./CreateUserTodo";
import FetchUserDTO from "./FetchUserDTO";
import UserEntity from "../../../Domain/Entities/UserEntity";
const store = userFactory.buildUserStore();

class UserService {

  async authUser (params) {
    try{
      const jwtAuthService = new JwtAuthService();
      const userIsPresent = await store.findUser(params);
      if (userIsPresent) {
        return { token: jwtAuthService.generateJwtToken(userIsPresent.id) };
        //return userIsPresent;
      }
      const user = UserEntity.createFromInput(params);
      const newUser = await store.add(user);
      return { token: jwtAuthService.generateJwtToken(user.id) };
      //return newUser;
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
