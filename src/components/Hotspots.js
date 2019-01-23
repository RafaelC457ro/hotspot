import React, { createPortal } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import "./Hotspots.css";

const body = document.body;

const HostSpot = () => ReactDom.createPortal(<div className="HotSpot" />, body);

export default HostSpot;
