const bcrypt = require("bcrypt");
const appError = require("../../../HTTP/errors/appError");
const AuthService = require("./authService");
const UserFactory = require("../../Infrastructure/factories/userFactory");
const store = UserFactory.buildUserStore();

class JwtAuthService extends AuthService {
    constructor() { super() }

    async validateUserCredentials(params) {
        const userIsPresent = await store.findUser(params);
        if (!userIsPresent) {
            throw new appError("Invalid Email.", 400);
        }

        if (!bcrypt.compare(params.password, userIsPresent.password)) {
            throw new appError("Invalid Password.", 400);
        }
        return { token: this.generateJwtToken(userIsPresent.id) };
    }

}
module.exports = JwtAuthService;