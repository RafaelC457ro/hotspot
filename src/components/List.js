import React from "react";
import PropTypes from "prop-types";
import "./List.css";

const List = ({ title, items }) => (
  <div className="List">
    <div className="List-head">
      <div>{title}</div>
    </div>
    <div className="List-body">
      <ul>
        {items.map(({ id, description }) => (
          <li className="List-item" key={id}>
            {description}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default List;
