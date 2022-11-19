import React from "react";
import { ITopSeller } from "../../types/topSeller";
interface Props {}
import "./top-sellers.css";

const topSellers: ITopSeller[] = [
  { id: 1, name: "soda", amount: 120 },
  { id: 2, name: "barbie-doll", amount: 150 },
  { id: 3, name: "pencil", amount: 90 },
];

export const TopSellers = (props: Props) => {
  return (
    <div id="top-sellers-component-container">
      <h3 className="top-sellers-title">Top Sellers </h3>
      <div className="top-sellers-list">
        {topSellers.map((topSeller: ITopSeller) => {
          return (
            <div className="top-seller-block" key={topSeller.id}>
              <span className="top-seller-name">{topSeller.name}</span>

              <span className="top-seller-amount">
                Amount: {topSeller.amount}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
