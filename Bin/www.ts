import { Command } from "commander";
import connectDB from "../App/Infrastructure/database/connection";
import logger from "../App/Infrastructure/Logger/logger";
import app from "../HTTP/Bootstrap/app";

// mongodb connection
connectDB();

const program = new Command();

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   logger.info(`Server is running on http://localhost:${PORT}`);
// });

program
  .command("run") // sub-command name
  .alias("r") // alternative sub-command is `al`
  .description("Run Todo App") // command description

  .action(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
    });
  });
// allow commander to parse `process.argv`
program.parse(process.argv);
