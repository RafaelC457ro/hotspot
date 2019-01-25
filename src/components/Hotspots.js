import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Popper from "../components/Popper";
import { updateTitle, updateDescription, openEdit } from "../actions/hotspots";
import "./Hotspots.css";

const HostSpot = ({
  hotspots,
  handleTittleChange,
  handleDescriptionChange,
  handleClick
}) =>
  ReactDom.createPortal(
    hotspots.map(({ id, x, y, title, showPopper, description }) => (
      <div
        className="HotSpot"
        key={id}
        style={{ display: "block", top: y, left: x }}
        onClick={handleClick(id)}
      >
        {showPopper ? (
          <Popper>
            <input
              type="text"
              className="Hotspot-title Hotspot-input Hotspot-input--title"
              placeholder="type the hotspot title"
              value={title}
              id={id}
              onChange={handleTittleChange(id)}
            />
            <textarea
              type="text"
              className="Hotspot-input"
              placeholder="type the hotspot description"
              rows="5"
              cols="40"
              onChange={handleDescriptionChange(id)}
              value={description}
            />
          </Popper>
        ) : null}
      </div>
    )),
    document.body
  );

HostSpot.propTypes = {
  hotspots: PropTypes.arrayOf(PropTypes.object),
  handleTittleChange: PropTypes.func,
  handleDescriptionChange: PropTypes.func,
  handleClick: PropTypes.func
};

const mapStateToProps = state => {
  return {
    hotspots: state.hotspots.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: id => event => {
      event.stopPropagation();
      dispatch(openEdit(id));
    },
    handleTittleChange: id => event => {
      dispatch(updateTitle(id, event.target.value));
    },
    handleDescriptionChange: id => event => {
      dispatch(updateDescription(id, event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostSpot);
