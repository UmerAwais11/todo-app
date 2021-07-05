import FetchUserDTO from "../../../Application/services/User/FetchUserDTO";

const User = require("../../database/models/sequelize/user");
const UserEntity = require("../../../Domain/Entities/UserEntity");

class SequelizeUserStore {
    async add(user) {
        const newUser = await User.create(user)
        return UserEntity.createFromInput(newUser);
    }

    async findByUserID(user: FetchUserDTO) {
        const data = await User.findOne({ where: { name: user.username,
                password: user.password } });
        if (data) {
            return UserEntity.createFromInput(data);
        }
    }
}
export default new SequelizeUserStore();