import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from '../../components/hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 0.3
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });
  const [totalPrice, setPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);

  const updatePurchaseState = () => {
    const ingredientsCopy = { ...ingredients };
    const sum = Object.values(ingredientsCopy).reduce((acc, cur) => {
      return acc + cur;
    });
    sum !== 0 ? setPurchasable(false) : setPurchasable(true);
  };
  useEffect(() => {
    updatePurchaseState();
  });

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

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const closeModalHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinue = () => {
    // alert("You continued");
    setLoading(true);
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      customer: {
        name: "Alan",
        address: {
          street: " Teststreet 1",
          zipCode: "1324321",
          country: "Czech Republic"
        },
        email: "testemail@email.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        setLoading(false)
        setPurchasing(false)
        console.log(response)
      })
      .catch(error => {
        setLoading(false)
        setPurchasing(false)
        console.log(error)
      });
  };

  let orderSummary = (
    <OrderSummary
      closeModal={closeModalHandler}
      continue={purchaseContinue}
      ingredients={ingredients}
      totalPrice={totalPrice}
    />
  );

  return (
    <React.Fragment>
      <Modal purchasing={purchasing} closeModal={closeModalHandler}>
        {loading ? <Spinner/> : orderSummary}
      </Modal>

      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientDeleted={removeIngredientHandler}
        disabled={disableInfo}
        price={totalPrice}
        purchasable={purchasable}
        purchasing={purchaseHandler}
      />
    </React.Fragment>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
