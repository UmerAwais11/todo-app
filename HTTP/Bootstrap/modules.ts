import * as dotenv from "dotenv";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as morgan from "morgan";
import * as session from "express-session";

const loadModules = async (app) => {
  dotenv.config({ path: ".env" });

  app.use(morgan("tiny"));

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors());

  app.use(
    session({ secret: "marcoReus", resave: false, saveUninitialized: true })
  );

  app.set("view engine", "ejs");
};

export default loadModules;
