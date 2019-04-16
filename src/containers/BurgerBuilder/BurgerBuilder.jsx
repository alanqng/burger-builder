import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.50,
  bacon: 0.70,
  cheese: 0.40,
  meat: 0.30
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2
  });

  const [totalPrice, setPrice] = useState(4);

  const addIngredientHandler = type => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    setIngredients(prevState => {
      return {
        ...prevState,
        [type]: updatedCount
      };
    });
    const newPrice = totalPrice + INGREDIENTS_PRICES[type];
    setPrice(newPrice);
  };

  const removeIngredientHandler = type => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    setIngredients(prevState => {
      return {
        ...prevState,
        [type]: updatedCount
      };
    });
    const newPrice = totalPrice - INGREDIENTS_PRICES[type];
    setPrice(newPrice);
  };

  const disableInfo = {
    ...ingredients
  };

  for (let ingredient of Object.keys(disableInfo)) {
    disableInfo[ingredient] = disableInfo[ingredient] <= 0;
  }
  
  

  return (
    <React.Fragment>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientDeleted={removeIngredientHandler}
        disabled={disableInfo}
        price={totalPrice}
      />
    </React.Fragment>
  );
};

export default BurgerBuilder;
