import * as mongoose from "mongoose";
import logger from "../../../Logger/logger";

const connectDB = async () => {
  try {
    // mongodb connection string
    //console.log('*************************** MONGO URI IS ************************ : ', 'mongodb+srv://admin:admin123@cluster0.tn10l.mongodb.net/todos?retryWrites=true&w=majority')
    // const con = await mongoose.connect(process.env.MONGO_URI, {
    //why is env not able to pick the environment variables ???
    const con = await mongoose.connect('mongodb+srv://admin:admin123@cluster0.tn10l.mongodb.net/todos?retryWrites=true&w=majority', {
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
