import { Application, Request, Response, Router } from "express";

export function register(router: Router) {
  router.get("/health-check", (req: Request, res: Response) => {
    return res.status(200).send({ status: "ok" });
  });
}

