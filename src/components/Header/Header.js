import React, {useContext, useState , useEffect} from "react";
import { GiShoppingCart } from "react-icons/gi";
import './Header.css'
import { Context } from "../StoreContext/Context";
import CartModal from "../Body/CartModal";
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  //using context to retrieve modal state and cartcontext
  const { lgShow, setLgShow, cartContext } = useContext(Context);

  //control bounce animation with state
  const [bounceBtn, setBounceBtn] = useState(false)

  //using object destructuring to be able to add the context as a dependency
  const {items} = cartContext
 
  //setting animation class using template literals
  //if boucebtn is true animation bounce if not the bounce css is not added
  const btnClasses = `${'cart-header'} ${bounceBtn ? 'tada' : ''}`;

  //using useEffect to trigger animation when the app re-renders
useEffect(() => {
  if (items.length === 0) {
    return;
  }
  setBounceBtn(true)


  //using set-timeout to remove bounce animation after 300 milisecond
  const timer = setTimeout(() => {
    setBounceBtn(false);
  }, 300);

//using a cleanup function to clean up side effects
return () => {
  clearTimeout(timer)
}
}, [items]);

//getting the number of cart items in a single value using 
//vanilla javascript reduce method

const numberOfCartItems = items.reduce((currentNumber, item) => {
  return currentNumber + item.amount
}, 0);

  return (
    <>
    {lgShow && <CartModal />}
    <Navbar sticky="top" className='header-app'>
      <div className="header-container">
        <div className="logo-header">MY MEAL</div>

        <div className={btnClasses}>
          <div className="cart-section" 
          style={{cursor: 'pointer'}}
          onClick={() => setLgShow(true)}>
            <GiShoppingCart className='cart-icon'
            /> <span className='cart-title'>Your Cart</span> 
            <div className="cart-count">{numberOfCartItems}</div>
          </div>
        </div>
      </div>
    </Navbar>
    </>
  );
};

export default Header;
