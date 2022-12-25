// stripe.config.ts
import stripe from 'stripe';

export const stripeClient = new stripe('sk_test_51KczwLDfMvn3WNi07VzkT1wBIMrRfiChgNdZikcf8oODgh2ElJ8xq4KO77MULr3ajeqlf9beVex8szMfUatF5yQi00SauTS33s',{
    apiVersion: '2022-11-15',
});
