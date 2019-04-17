import React from "react";
import Button from '../../UI/Button/Button'

const orderSummary = props => {
  const ingredientsSummary = props.ingredients;
  return (
    <React.Fragment>
      <h3>Your Order!</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {Object.entries(ingredientsSummary).map(entry => (
          <li key={entry}>
            <span style={{ textTransform: "capitalize" }}>
              {entry[0]}
            </span>: {entry[1]}
          </li>
        ))}
      </ul>
      <p><strong>Total price: {props.totalPrice.toFixed(2)} $</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType={'Danger'} clicked={props.closeModal}>CANCEL</Button>
      <Button btnType={'Success'} clicked={props.continue}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default orderSummary;
