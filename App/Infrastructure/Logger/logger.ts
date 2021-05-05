import * as Logger from "bunyan";

const log = Logger.createLogger({
  name: "TODO App",
  streams: [
    {
      level: "info",
      stream: process.stdout,
    },
    {
      level: "debug",
      stream: process.stdout,
    },
    {
      level: "error",
      stream: process.stdout,
    },
  ],
});

export default log;
