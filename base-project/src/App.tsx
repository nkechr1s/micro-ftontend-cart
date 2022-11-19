import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { globalStore } from "./redux-store";

import { Cart } from "./components/Cart/Cart";
import { Products } from "./components/Products/Products";
import { TopSellers } from "./components/TopSellers/TopSellers";
import { Header } from "./components/Header/Header";
import "./index.css";

const App = () => (
  <Provider store={globalStore}>
    <div className="component-container">
      <Header />
    </div>
    <div className="component-container">
      <Products />
    </div>
    <div className="component-container">
      <TopSellers />
    </div>
    <div className="component-container">
      <Cart />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
