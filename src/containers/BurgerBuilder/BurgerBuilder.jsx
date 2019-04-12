import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2
  });

  return (
    <React.Fragment>
      <Burger ingredients={ingredients} />
      <div>Build Controls</div>
    </React.Fragment>
  );
};

export default BurgerBuilder;
