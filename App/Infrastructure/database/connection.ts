import * as mongoose from "mongoose";
import logger from "../Logger/logger";

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    logger.info(`MongoDB connected : [ ${con.connection.host} ]`);
  } catch (error) {
    logger.error(
      `Unable to connect to database because of the following error [ ${error} ]`
    );
    process.exit(1);
  }
};

export default connectDB;
