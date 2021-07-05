const { db } = require("../config");
const mongoose = require("../database/models/mongoose/mongooseConnection");
const sequelize = require("../database/models/sequelize/sequelizeConnection");
module.exports = () => {
    if (db.driver === "mongoose") {
        mongoose();
    }
    if (db.driver === "sequelize") {
        sequelize();
    }
}