import StripeCheckout from "react-stripe-checkout";
import React from "react";
import {Button} from "react-bootstrap";

const StripePayment = (props) => {
    return (
        <StripeCheckout
            label={props.label}
            name={props.name}
            billingAddress
            shippingAddress
            image={props.img}
            description={`Your ${props.desc} is $${props.price}`}
            amount={props.price * 100}
            panelLabel={props.panelLabel}
            token={props.onPaymentSubmit}
            stripeKey={props.publishableKey}
            >
            <Button className={props.btnStyle} type={"btn"} onClick={(event)=> props.validate(event)}>
               <span className="h6"> {props.label} </span>
            </Button>
        </StripeCheckout>
    );
}

export default StripePayment;