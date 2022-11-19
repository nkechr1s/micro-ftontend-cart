import { combineReducers } from "redux";
import Cart from "./cart/reducer";

const allReducer = combineReducers({
  cart: Cart,
});

export default allReducer;

export type storeStateType = ReturnType<typeof allReducer>;
