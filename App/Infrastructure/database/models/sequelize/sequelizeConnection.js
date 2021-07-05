const { db } = require("../../../config");
const Sequelize = require('sequelize');
import logger from "../../../Logger/logger";
module.exports = () => {
    const sequelize = new Sequelize(db.host);
    sequelize
        .authenticate()
        .then(() => {
            logger.info('Connection established successfully.');
        })
        .catch(error => {
            logger.error(
                `Unable to connect to database because of the following error [ ${error} ]`
            );
        });
}