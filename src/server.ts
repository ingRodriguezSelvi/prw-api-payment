import express from "express";
import Cors from "cors";
import * as dotenv from "dotenv";
import http from "http";
import routes from "./routes/routes";

export let server!: http.Server;
export const initService = () => {
  const PORT = process.env.PORT || 3000;
  const app = express();
  const cors = Cors();

  dotenv.config({ path: __dirname + "/.env" });
//Cors
  app.use(cors);
  app.use(express.json()); // for parsing application/json
//Routes
  const router = express.Router();

  //Routes
  const basePath = "/api/payment";
  app.use(`${basePath}/stripe`, routes.routerStripe);
  app.use(`${basePath}/health-check`, routes.routerHealthCheck);

  server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  return app;
};




