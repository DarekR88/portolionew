import React from "react";

const BurgerButton = (props) => (
  <button className="burgerButton" onClick={props.toggleMenu}>
    <div className="menu-lines">
      <div className="buttonLine" />
      <div className="buttonLine" />
      <div className="buttonLine" />
    </div>
  </button>
);

export default BurgerButton;
