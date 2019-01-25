import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeHotspot } from "../actions/hotspots";
import "./List.css";

const List = ({ hotspots, handleDeleteClick }) => (
  <div className="List">
    <div className="List-head">
      <div>List of hotspot</div>
    </div>
    <div className="List-body">
      <ul>
        {hotspots.map(({ id, title }, index) => (
          <li className="List-item" key={id}>
            <span>{title}</span>
            <button
              className="List-button--delete"
              onClick={handleDeleteClick(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

List.propTypes = {
  hotspots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ),
  handleDeleteClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    hotspots: state.hotspots.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDeleteClick: id => () => {
      dispatch(removeHotspot(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
