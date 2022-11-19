import React, { useState } from "react";
import { useTriggerAddToCart } from "../../redux-store/cart/hook";
import { IProduct } from "../../types/product";
interface Props {}

const products = [
  { id: 1, name: "shampoo", price: 2 },
  { id: 2, name: "soap", price: 3 },
  { id: 3, name: "spoon", price: 1 },
  { id: 4, name: "plate", price: 5 },
  { id: 5, name: "toy car", price: 4 },
];

import "./products.css";

export const Products = (props: Props) => {
  const triggerAddToCart = useTriggerAddToCart();

  const addToCart = (prod: IProduct) => {
    triggerAddToCart(prod);
  };

  return (
    <div id="products-component-container">
      <h3 className="products-title">Products</h3>
      <div className="product-list">
        {products.map((product: IProduct) => {
          return (
            <div className="product-block" key={product.id}>
              <span className="product-name">{product.name}</span>
              <div className="price-box">
                <span className="product-price">Price: {product.price} €</span>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
