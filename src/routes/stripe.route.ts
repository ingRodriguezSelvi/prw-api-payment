import { Router } from "express";
import { confirm, detailsOrder, intentionToPay } from "../controllers/stripeController";

export function register(router: Router) {
  router.patch("/stripe/:id", intentionToPay);
  router.patch("/stripe/confirm/:id", confirm);
  router.get("/stripe/details-order/:id", detailsOrder);
}



