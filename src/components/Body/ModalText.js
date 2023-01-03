import React from "react";
import "./Body.css";

const ModalText = ({ name, amount, price, description, onRemove, onAdd }) => {
  return (
    <div>
      <div className="cart-list">
        <div className="cart-list-column-one">
          <div className="item-title">{name}</div>
          <div>{description}</div>

          <div className="cart-modal-item">
            <div className="cart-modal-price">${price}</div>
            <div className="cart-modal-count"> x {amount}</div>
          </div>
        </div>

        <div className="cart-list-column-two">
          <div>
            <button className="add-item-btn"
            onClick={onAdd}
            >+</button>
          </div>
          <div>
            <button className="remove-item-btn"
            onClick={onRemove}
            >-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalText;
