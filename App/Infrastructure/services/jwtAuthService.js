const bcrypt = require("bcrypt");
import logger from "../../Infrastructure/Logger/logger";
const AuthService = require("./authService");
const UserFactory = require("../../Infrastructure/factories/userFactory");
const store = UserFactory.buildUserStore();

class JwtAuthService extends AuthService {
    constructor() { super() }

    async validateUserCredentials(params) {
        const userIsPresent = await store.findUser(params);
        if (!userIsPresent) {
            logger.error(
                `Unable to authenticate user because of Invalid Email. ]`
            );
        }

        if (!bcrypt.compare(params.password, userIsPresent.password)) {
            logger.error(
                `Unable to authenticate user because of Invalid Password. ]`
            );
        }
        return { token: this.generateJwtToken(userIsPresent.id) };
    }

}
module.exports = JwtAuthService;