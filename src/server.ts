import express from "express";
import Cors from "cors";
import * as dotenv from "dotenv";
import http from "http";
import { registerRoutes } from "./routes";

export let server!: http.Server;
export const initService = () => {
  const PORT = process.env.PORT || 3001;

  const app = express();
  const cors = Cors();
  dotenv.config({ path: __dirname + "/.env" });
  app.use(express.static(__dirname + "/public"));

//Cors
  app.use(cors);
  app.use(express.json()); // for parsing application/json
//Routes
  const router = express.Router();
  registerRoutes(router);
  app.use("/api/payment", router);

  server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  return app;
};




