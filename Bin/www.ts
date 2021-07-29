import { Command } from "commander";
const connectDB = require("../App/Infrastructure/database/dbConnection");
import logger from "../App/Infrastructure/Logger/logger";
import app from "../HTTP/Bootstrap/app";

connectDB();

const program = new Command();

const PORT = process.env.PORT || 5000;

program
  .command("run")
  .alias("r")
  .description("Run Todo App")

  .action(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
    });
  });
program.parse(process.argv);
