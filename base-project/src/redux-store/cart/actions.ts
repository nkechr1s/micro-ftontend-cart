import { IProduct } from "../../types/product";
// Enum of action types
export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

// Action Interfaces
interface IAddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: IProduct;
}

interface IRemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: number;
}

interface IClearCartAction {
  type: ActionTypes.CLEAR_CART;
}

// dispatch functions
export const triggerAddToCart = (product: IProduct) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const triggerRemoveFromCart = (id: number) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};

export const triggerClearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

// Alert action Types used in reducer
export type CartActionTypes =
  | IAddToCartAction
  | IRemoveFromCartAction
  | IClearCartAction;
