import { Application, Request, Response, Router } from "express";

const routerHealthCheck = Router();
routerHealthCheck.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ status: "ok" });
});

export default routerHealthCheck;

