import { ActionTypes, CartActionTypes } from "./actions";
import { IProduct } from "../../types/product";

interface ICartItem {
  item: IProduct;
  amount: number;
}
const initCartState: ICartItem[] = [];

const cartReducer = (state = initCartState, action: CartActionTypes) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return triggerAddToCart(state, action.payload);
    }
    case ActionTypes.REMOVE_FROM_CART: {
      return triggerRemoveFromCart(state, action.payload);
    }
    case ActionTypes.CLEAR_CART: {
      return triggerClearCart();
    }
    default:
      return state;
  }
};

// FUNCTIONS TO BE CALLED ON REDUCER.

const triggerAddToCart = (state: ICartItem[], product: IProduct) => {
  const itemExist = state.find(({ item }) => item.id === product.id);
  //check if item exist
  if (itemExist) {
    return state.map((element) => {
      if (element.item.id === product.id) {
        return {
          item: { ...product },
          amount: element.amount + 1,
        };
      }
      return element;
    });
  }
  //does not exist add one
  return [...state, { item: product, amount: 1 }];
};

const triggerRemoveFromCart = (state: ICartItem[], id: number) => {
  return state.filter((element) => {
    return element.item.id !== id;
  });
};

const triggerClearCart = () => {
  return [];
};

export default cartReducer;
