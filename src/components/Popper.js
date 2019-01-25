import React from "react";
import "./Popper.css";

const Popper = ({ children }) => (
  <div
    className="Popper"
    onClick={event => {
      event.stopPropagation();
    }}
  >
    {children}
  </div>
);

export default Popper;
