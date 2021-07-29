const JwtAuthService = require("../../App/Infrastructure/services/jwtAuthService");
import logger from "../../../Infrastructure/Logger/logger";
const jwtAuthService = new JwtAuthService();

module.exports = async function (req, res) {
    try {
        const { email, password } = req.body;
        res.status(200).json(await jwtAuthService.validateUserCredentials({ email: email, password: password }));
    } catch (error) {
        logger.error(
            `Unable to authenticate user because of the following error [ ${error} ]`
        );
    }
};