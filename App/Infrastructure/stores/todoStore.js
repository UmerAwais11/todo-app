class ToDoStore {
    static buildMongooseToDoStore() {
        const MongooseToDoStore = require("./mongoose/todoStore");
        return MongooseToDoStore;
    }

    static buildSequelizeToDoStore() {
        const SequelizeToDoStore = require("./sequelize/todoStore");
        return SequelizeToDoStore;
    }
}
module.exports = ToDoStore;