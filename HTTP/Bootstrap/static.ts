import * as path from "path";

const loadStatic = async (app, express) => {
  app.use("/css", express.static(path.resolve(__dirname, "../../assets/css")));
  app.use("/js", express.static(path.resolve(__dirname, "../../assets/js")));
};

export default loadStatic;
