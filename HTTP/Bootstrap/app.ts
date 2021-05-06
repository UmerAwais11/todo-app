import * as express from "express";
import loadStatic from "./static";
import loadModules from "./modules";

import apiRoutes from "../Routes/router";

const app = express();

loadStatic(app, express);
loadModules(app);
app.use("/", apiRoutes);

export default app;
