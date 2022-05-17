import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51L0QUPL6d6KodMh7P5FbJy4URFziwZCvqBup98fNkVoMGzbyZAyAGLkb2oRK7e0y8eOtRbPSEIKGZS8XUZzsWRCl00fwLpankX'

    const onToken = token => {
        console.log(token);
        alert("Payment Successeful")
    }


    return (
        <StripeCheckout 
          label="Pay Now"
          name="CRWN Clothing"
          billingAddress
          shippingAddress
          image="https://svgshare.com/i/CUz.svg"
          description={`Your total is ${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;