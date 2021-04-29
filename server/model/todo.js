const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: String,
  status: String,
});

const todoList = mongoose.model("todolist", schema);

module.exports = todoList;
