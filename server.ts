//const app = require("./HTTP/Bootstrap/app");
import logger from "./App/Infrastructure/Logger/logger";
import app from "./HTTP/Bootstrap/app";
app.listen(process.env.PORT, () => {
  logger.info(`Server is running on http://localhost:${process.env.PORT}`);
});
