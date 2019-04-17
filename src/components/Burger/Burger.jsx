import React from "react";
import classes from "./Burger.module.css";
import Ingredients from "./Ingredients/Ingredients";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // console.log([...Array(props.ingredients[igKey])]);
        return <Ingredients key={igKey + i} type={igKey} />;
      });
    })
    .flat();
    
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Select Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      {transformedIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  );
};

export default burger;
