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
  password: {
    type: String,
    required: true,
    unique: true,
  },
  status: String,
});

const userDb = mongoose.model("userdb", schema);

export default userDb;
