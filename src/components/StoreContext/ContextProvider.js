import React, { useState, useReducer } from "react";
import { Context } from "./Context";

//default cart items

const defaulCartState = {
  items: [],
  totalAmount: 0,
};

//reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      let updatedItems;
      //find the index of an item in the array using find
      if (state.items.find((item) => item.id === action.item.id)) {
        //updating existing item added to the cart in an object array..
        //if a new item is added then output only item
        updatedItems = state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + action.item.amount }
            : item
        );
      } else {
        updatedItems = [...state.items, action.item];
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };

    case "REMOVE":
      const removeNow = state.items.find((item) => item.id === action.id);
      let removeItems;
      //find the index of an item in the array using find
      if (removeNow.amount === 1) {
        removeItems = state.items.filter((item) => item.id !== action.id); 
       
      } else {
        removeItems = state.items.map((item) =>
          item.id === action.id ? { ...item, amount: item.amount - 1 } : item
        );
      }

      return {
        items: removeItems,
        totalAmount: state.totalAmount - removeNow.price,
      };
    default:
      return defaulCartState;
  }
};

//alternative way to update cart items
/* let updatedItems;
      const index = state.items.findIndex((item) => item.id === action.item.id);
      if (index === -1) {
        updatedItems = [...state.items, action.item];
      } else {
        updatedItems = [...state.items];
        updatedItems[index].amount += action.item.amount;
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };

      default:
        return defaulCartState */

//alternative way to remove cart

/*  const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let removeItems;
      if (existingItem.amount === 1) {
        removeItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        removeItems = [...state.items];
        removeItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: removeItems,
        totalAmount: updatedTotalAmount,
       }; */

const ContextProvider = (props) => {
  //control cart modal
  const [lgShow, setLgShow] = useState(false);

  //reducer

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaulCartState
  );

  //Add items to cart
  const addItemToCartHandler = (addItem) => {
    dispatchCartAction({ type: "ADD", item: addItem });
  };

  //removeItem in Cart
  const removeItemFromCart = (removeId) => {
    dispatchCartAction({ type: "REMOVE", id: removeId });
  };

  //storing the cart items in a context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItemFromCart: removeItemFromCart,
  };

  return (
    <Context.Provider value={{ lgShow, setLgShow, cartContext }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
