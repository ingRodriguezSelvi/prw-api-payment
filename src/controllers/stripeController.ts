import { Response, Request } from "express";
import * as stripeService from "../services/stripeService";

export const intentionToPay = async (req: Request, res: Response) => {
  try {
    const { tokenStripe } = req.body;

    //TODO: BUSCAMOS ORDEN PARA CONFIRMAR EL MONTO
    // FALTA IMPLEMENTAR

    const responseMethod = await stripeService.generatePaymentMethod(tokenStripe);
    const resPaymentIntent = await stripeService.generatePaymentIntent("150", responseMethod.id); //Cambiar amount por el monto de la orden


    //Actualizamos orden con intencion de pago
    //Implementar

    res.status(200).json({
      status: true,
      msg: "Intention Ok",
      data: resPaymentIntent
    });
  } catch (exception) {
    return res.status(500).json({
      ok: false,
      message: "Error creating payment intent",
      exception
    });
  }
};

export const confirm = async (req: Request, res: Response) => {
  let payload;
  try {
    const { id } = req.params;
    const { payment_method } = req.body;

    const confirmPayment = await stripeService.confirmPaymentIntent(id, payment_method);
    const status = 1;

    //TODO: Actualizamos nuestra orden con el estatus

    payload = {
      id,
      status: status
    };
    //Todo actualizar orden

    res.status(200).json({
      status: true,
      msg: "Confirm ok",
      data: confirmPayment
    });

  } catch (e: any) {
    console.log(e.message);
    res.status(500);
    res.send({ error: "Algo ocurrio" });
  }
};

export const detailsOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Id de la ordden creada en stripe
    const detailStripe = await stripeService.getPaymentDetail(id);
    res.status(200).json({
      status: true,
      msg: "Order Details",
      data: detailStripe
    });
  } catch (e:any) {
    console.log(e.message);
    res.status(500);
    res.send({ error: "Algo ocurrio" });
  }
};
