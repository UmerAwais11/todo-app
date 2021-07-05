const { db } = require("../../../config");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(db.host);
class ToDo extends Sequelize.Model { }
ToDo.init({
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    description: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },

}, {
    sequelize,
    modelName: 'ToDo',
    timestamps: true
});
ToDo.sync();
module.exports = ToDo;