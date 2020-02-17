import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { useLocation, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import CheckoutForm from "../components/CheckoutForm";

const Payment = () => {
  const token = Cookies.get("token");
  const username = Cookies.get("username");
  const location = useLocation();
  let { img, title, price, productId } = location.state;

  return token ? (
    <div className="payment-container">
      <StripeProvider apiKey="pk_test_5z9rSB8XwuAOihoBixCMfL6X">
        <div className="payment-card">
          <span>Acheter en ligne</span>
          <div className="payment-summary">
            <img alt="offer" src={img} />
            <div>
              <p>{title}</p>
              <p>{price} €</p>
            </div>
          </div>
          <Elements>
            <CheckoutForm
              username={username}
              price={price}
              title={title}
              productId={productId}
            />
          </Elements>
        </div>
      </StripeProvider>
    </div>
  ) : (
    <Redirect to="/log_in" />
  );
};

export default Payment;
