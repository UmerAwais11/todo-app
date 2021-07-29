const handleError = require("../utils/handleError");
const JwtAuthService = require("../../App/Infrastructure/services/jwtAuthService");
import logger from "../../../Infrastructure/Logger/logger";
const jwtAuthService = new JwtAuthService();

module.exports = async function (req, res, next) {
    try {
        const isAuthorized = await jwtAuthService.userHasAuthorization(req);
        if (!isAuthorized) {
            logger.error(
                `Unable to authorize the user because either you are not signed in or you are not authorized for this action [ ${res} ]`
            );
        }
        next();
    } catch (error) {
        logger.error(
            `Unable to authorize the user because either you are not signed in or you are not authorized for this action [ ${error} ]`
        );
    }
};