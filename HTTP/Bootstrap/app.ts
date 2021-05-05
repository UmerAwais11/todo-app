import * as dotenv from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as morgan from "morgan";
import * as path from "path";
import * as session from "express-session";

import apiRoutes from "../Routes/router";

const app = express();

dotenv.config({ path: ".env" });

// log requests
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// for sessions
app.use(
  session({ secret: "marcoReus", resave: false, saveUninitialized: true })
);

// set view engine
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "../../assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "../../assets/js")));

// load routers
app.use("/", apiRoutes);

export default app;
