import React, { useContext, useState } from "react";
import "./Body.css";
import { Context } from "../StoreContext/Context";
import CartModal from "./CartModal";

const Body = (props) => {
  const { lgShow, cartContext } = useContext(Context);

  /* const amountInputRef = useRef(); */


  //Control onchange using two way binding

  const [amountInput, setAmountInput] = useState(0);

  //onchangeHandler
 const onChangeHandler = (event) => {
  setAmountInput(event.target.value)
  }

  //getting the number of order
  const onAddToCart = (cartamount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: cartamount,
      price: props.price,
      description: props.description
    });
  };

  //submit cart
  const submitHandler = (event) => {
    event.preventDefault();
   /*  console.log(amountInput) */
    onAddToCart(+amountInput);  
    setAmountInput(+amountInput)
  };

  return (
    <>
      {lgShow && <CartModal />}
      
            <div key={props.id}>
              <div className="menu-list">
                <div className="menu-list-column-one">
                  <div className="menu-title">{props.name}</div>
                  <div className="menu-description">{props.description}</div>
                  <div className="menu-price">${props.price}</div>
                </div>
                <div className="menu-list-column-two">
                  <form onSubmit={submitHandler}>
                    <b>Amount</b>
                    <input
                      type="number"
                      id={props.id}
                      defaultValue= {amountInput}
                      min="1"
                      onChange={onChangeHandler}
                    />
                    <div>
                      <button className="btn-add">+Add Cart</button>
                     
                    </div>
      
                  </form>
                </div>
              </div>
            </div>
      
     
    </>
  );
};

export default Body;
