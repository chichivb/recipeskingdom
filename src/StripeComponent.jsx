import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_SDai9hhECDDElhEjrJlCTPDO");

const hardcodedClientSecret = import.meta.env.VITE_PUBLIC_STRIPE_KEY;

export default function StripeComponent({ children }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm clientSecret={hardcodedClientSecret} />
    </Elements>
  );
}
