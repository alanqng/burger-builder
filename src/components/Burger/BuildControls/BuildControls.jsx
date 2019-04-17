import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((control, index) => (
      <BuildControl
        key={index}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        deleted={() => props.ingredientDeleted(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={props.purchasable} onClick={props.purchasing}>ORDER NOW</button>
  </div>
);

export default buildControls;
