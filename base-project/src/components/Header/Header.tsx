import React from "react";

interface Props {}

import "./header.css";

export const Header = (props: Props) => {
  return (
    <div id="header-component-container">
      <ul className="header-menu">
        <li className="header-menu-item">Home</li>
        <li className="header-menu-item">Products</li>
        <li className="header-menu-item">Profile</li>
      </ul>
    </div>
  );
};
