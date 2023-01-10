import { Router } from "express";
import { confirm, detailsOrder, intentionToPay } from "../controllers/stripeController";

const routerStripe = Router();
routerStripe.patch("/:id", intentionToPay);
routerStripe.patch("/confirm/:id", confirm);
routerStripe.get("/details-order/:id", detailsOrder);

export default routerStripe;


