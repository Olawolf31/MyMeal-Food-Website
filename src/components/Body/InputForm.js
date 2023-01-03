/* import React from "react";

const InputForm = () => {
  return (
    <div>
      <input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
       </div>
  );
};

export default InputForm;






import React, { useContext, useState } from "react";
import "./Body.css";
import Dummy_Meals from "../../Dummy_Meals";
import { Context } from "../StoreContext/Context";
import CartModal from "./CartModal";

const Body = () => {
  const { lgShow, cartContext } = useContext(Context);

  /* const amountInputRef = useRef(); */


  //Control onchange using two way binding

/*   const [amountInput, setAmountInput] = useState(0); */

  //onchangeHandler
 /* const onChangeHandler = (event) => {
  setAmountInput(event.target.value)
  } */

  //getting the number of order
/*   const onAddToCart = (cartamount) => {
    cartContext.addItem({
      id: Dummy_Meals.id,
      name: Dummy_Meals.name,
      amount: cartamount,
      price: Dummy_Meals.price,
    });
  }; */

  //submit cart
/*   const submitHandler = (event) => {
    event.preventDefault();
    console.log(amountInput) */
  /*   console.log(enteredAmountNumber); */
  //the + converts the string to number
/*     onAddToCart(+amountInput);  
  }; */

  /* return (
    <>
      {lgShow && <CartModal />}
      <div className="body-container">
        {Dummy_Meals.map((meals) => {
          return (
            <div key={meals.id}>
              <div className="menu-list">
                <div className="menu-list-column-one">
                  <div className="menu-title">{meals.name}</div>
                  <div className="menu-description">{meals.description}</div>
                  <div className="menu-price">${meals.price}</div>
                </div>
                <div className="menu-list-column-two">
                  <form onSubmit={submitHandler}>
                    <b>Amount</b>
                    <input
                      type="number"
                      id={meals.id}
                      defaultValue= {amountInput}
                      min="1"
                      max="5"
                      step='1'
                      onChange={onChangeHandler}
                    />
                    <div>
                      <button className="btn-add">+Add Cart</button>
                     
                    </div>
      
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
 */
/* export default Body; */
