class UserStore {
    static buildMongooseUserStore() {
        const MongooseUserStore = require("./mongoose/userStore");
        return MongooseUserStore;
    }

    static buildSequelizeUserStore() {
        const SequelizeUserStore = require("./sequelize/userStore");
        return SequelizeUserStore;
    }
}
module.exports = UserStore;