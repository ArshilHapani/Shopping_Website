import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MTnY9SJHjRbuahLrQha2Q7G8RA4IVirbhBs12iPzucbHyvIZr9p490hEMFO4BmvegO9iGj1tujcDjG6jYZ0MgZL00r1UfSZa0"
    );
  }

  return stripePromise;
};

export default getStripe;
