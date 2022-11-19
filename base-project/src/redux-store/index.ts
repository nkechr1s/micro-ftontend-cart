import { createStore } from "redux";
import allReducer from "./reducers";

// init Redux store
/* eslint-disable no-underscore-dangle */
export const globalStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
