const Jwt = require("jsonwebtoken");
import logger from "../../Infrastructure/Logger/logger";
const { application } = require("../../Infrastructure/config");
const UserFactory = require("../../Infrastructure/factories/userFactory");
const store = UserFactory.buildUserStore();

class AuthService {
    constructor() { }

    userHasAuthorization(req) {
        const token = req.headers["x-access-token"] || req.headers["authorization"];
        if (!token) {
            logger.error(
                `Access denied because of no token provided. ]`
            );
        }

        try {
            const decoded = Jwt.verify(token, application.myPrivateKey);
            return store.userIsPresent(decoded.id);
        } catch (error) {
            logger.error(
            `Unable to authenticate user because of the following error [ ${error} ]`
            );
        }
    }

    generateJwtToken(userID) {
        return Jwt.sign({ id: userID }, application.myPrivateKey);
    }

}
module.exports = AuthService;