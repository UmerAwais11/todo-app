import logger from "../../App/Infrastructure/Logger/logger";
const GoogleAuthService = require( "../../App/Infrastructure/services/googleAuthService");
const googleAuthService = new GoogleAuthService();

module.exports.getAccount = async function (req, res) {
    try {
        const user = await googleAuthService.getGoogleAccountFromCode(req.query.code);
        res.status(200).json(user);
    } catch (e) {
        logger.error(e, res);
    }
};

module.exports.googleAuthUrl = async function (req, res) {
    try {
        const googleAuthService = new GoogleAuthService();
        res.send(googleAuthService.getConnectionUrl());
    } catch (e) {
        logger.error(e, res);
    }
};