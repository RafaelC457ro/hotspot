import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Hotspots.css";

const body = document.body;

const HostSpot = ({ hotspots }) =>
  ReactDom.createPortal(
    hotspots.map(item => (
      <div
        className="HotSpot"
        key={item.id}
        style={{ display: "block", top: item.y, left: item.x }}
      />
    )),
    body
  );

HostSpot.propTypes = {
  hotspots: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    hotspots: state.hotspots.items
  };
};

export default connect(mapStateToProps)(HostSpot);
