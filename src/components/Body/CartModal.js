import React, { useContext } from "react";
import { Context } from "../StoreContext/Context";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalText from "./ModalText";
import "../Body/Body.css";

const CartModal = () => {
  const { lgShow, setLgShow, cartContext } = useContext(Context);

  const totalAmount = `${cartContext.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItemFromCart(id)
  }

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1})
  }

  const cartItems = (
    <>
      {cartContext.items.map((item) => (
        <ModalText
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          description={item.description}
          onRemove = {() => cartItemRemoveHandler(item.id)}
          onAdd = {() => cartItemAddHandler(item)}
        />
      ))}
    </>
  );

  /* const totalAmount = `$${cartContext.totalAmount.toFixed(2)}` */

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {cartItems}
          <div className="cart-total">
            <span className="cart-total-amount">Total Amount</span>
            <span className="cart-total-amount">${totalAmount}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => console.log("Thank you")}>
            Continue to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
