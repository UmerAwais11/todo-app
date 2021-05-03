// const mongoose = require("mongoose");
import * as mongoose from "mongoose";

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

export default todoList;
