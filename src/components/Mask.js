import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { hideMask } from "../actions/mask";
import { addHotspot } from "../actions/hotspots";
import PropTypes from "prop-types";
import "./Mask.css";

const body = document.body;

const Mask = ({ mask, isAddingMode, handleMouseMove, handleClick }) => {
  const { height, width, x, y } = mask;
  return ReactDom.createPortal(
    mask.visible && isAddingMode ? (
      <div
        className="Rect"
        onMouseMove={handleMouseMove}
        onClick={handleClick(isAddingMode)}
        id="mask"
        style={{
          top: y,
          left: x,
          height: height,
          width: width
        }}
      />
    ) : null,
    body
  );
};

Mask.propTypes = {
  mask: PropTypes.object,
  isAddingMode: PropTypes.bool,
  handleMouseMove: PropTypes.func,
  handleClick: PropTypes.func
};

const mapStateToProps = state => {
  return {
    mask: state.mask,
    isAddingMode: state.hotspots.isAddingMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: isAddingMode => event => {
      event.stopPropagation();
      const { pageX: x, pageY: y } = event;

      if (!isAddingMode) {
        return;
      }

      dispatch(
        addHotspot({
          x,
          y
        })
      );
    },
    handleMouseMove: event => {
      setTimeout(() => {
        dispatch(hideMask());
      }, 100);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mask);
