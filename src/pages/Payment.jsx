import { Navigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51FZfWGJoVM1xTBsbKqfZDyKyYWDQDY7qxFFcBtA40e84TJWJqISeE9BTLOfrbWaHy8WWyxt8n1IzpemoCkenQqZM00Juyv07Hk"
);

const Payment = ({ token }) => {
  const { _id, product_price, product_name, cookieIdUser } =
    useLocation().state;

  console.log(_id);
  return token ? (
    <div>
      <h1>Résumé de la commande</h1>
      <p>Prix de la commande : {product_price} €</p>
      <p>Vous allez acheter : {product_name}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          idOffer={_id}
          product_name={product_name}
          product_price={product_price}
          token={token}
          cookieIdUser={cookieIdUser}
        />
      </Elements>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
