import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import "./Hotspots.css";

const body = document.body;

const HostSpot = ({ items }) =>
  ReactDom.createPortal(
    items.map(item => (
      <div
        className="HotSpot"
        key={item.id}
        style={{ display: "block", top: item.y, left: item.x }}
      />
    )),
    body
  );

export default HostSpot;
