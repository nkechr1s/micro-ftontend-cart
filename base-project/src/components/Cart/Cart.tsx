import React from "react";
import { useSelector } from "react-redux";
import {
  useTriggerRemoveFromCart,
  useTriigerClearCart,
} from "../../redux-store/cart/hook";

import "./cart.css";

interface Props {}

export const Cart = (props: Props) => {
  const cart = useSelector((state: storeStateType) => state.cart);

  const triggerClearCart = useTriigerClearCart();
  const triggerRemoveFromCart = useTriggerRemoveFromCart();

  const clearCart = () => {
    triggerClearCart();
  };

  const removeItem = (id: number) => {
    triggerRemoveFromCart(id);
  };

  return (
    <div id="cart-component-container">
      <h3 className="cart-title">Cart </h3>
      <button className="clear-cart-btn" onClick={clearCart}>
        {" "}
        Clear cart
      </button>
      {cart.length !== 0 ? (
        <div className="cart-container">
          {cart.map((cartItem) => {
            return (
              <div key={cartItem.item.id} className="cart-item-row">
                <span className="cart-item-name">{cartItem.item.name}</span>
                <div>
                  <span className="cart-item-amount">
                    Amount: {cartItem.amount}
                  </span>
                  <button
                    className="remote-item-btn"
                    onClick={() => removeItem(cartItem.item.id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h4 className="empty-cart-msg">Cart is Empty</h4>
      )}
    </div>
  );
};
