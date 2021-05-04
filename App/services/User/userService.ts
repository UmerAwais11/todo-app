import store from "../../stores/userStore";

class UserService {
  static async createUser(user) {
    try {
      // const response = await store.add(user);
      // return response;
      return await store.add(user);
    } catch (error) {}
  }
  static async findUser(req, res) {
    try {
      const username = req.body.name;
      const password = req.body.password;
      // const user = await store.findUser(username, password);
      // return user;
      return await store.findUser(username, password);
    } catch (error) {}
  }
}

export default UserService;
