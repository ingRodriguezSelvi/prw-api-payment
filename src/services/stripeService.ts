import { stripeClient } from "../config/stripe.config";


export const generatePaymentMethod = async (tokenStripe: string) => {
  return stripeClient.paymentMethods.create({
    type: "card",
    card: {
      token: tokenStripe
    }
  });
};

export const generatePaymentIntent = async (amount: string, payment_method: string) => {
  return await stripeClient.paymentIntents.create({
    amount: parseFloat(amount) * 100,
    currency: "USD",
    payment_method_types: ["card"],
    payment_method,
    description: `E-commerce payment prw`
  });
};

export const confirmPaymentIntent = async (id: string, token: string) => {
  return stripeClient.paymentIntents.confirm(id, {
    payment_method: token
  });
};
export const getPaymentDetail = async (id: string) => {
  return await stripeClient.paymentIntents.retrieve(id);
};
