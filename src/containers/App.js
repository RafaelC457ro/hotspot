import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Button from "../components/Button";
import List from "../components/List";
import HostSpot from "../components/Hotspots";
import Mask from "../components/Mask";
import { addHotspot, activateAddMode } from "../actions/hotspots";
import { updateMask } from "../actions/mask";
import "./App.css";

const App = ({ isAddingMode, handleClick, handleAddMode, handleMouseMove }) => (
  <div
    className="App"
    onClick={handleClick(isAddingMode)}
    onMouseMove={handleMouseMove(isAddingMode)}
  >
    <Header />
    <div className="Container">
      <div className="Container-content">
        <div className="Container-action">
          <Button title="Create a Hotspot" onClick={handleAddMode} />
        </div>
        <List />
      </div>
    </div>
    <HostSpot />
    <Mask />
  </div>
);

const mapStateToProps = state => {
  return {
    hotspots: state.hotspots.items,
    isAddingMode: state.hotspots.isAddingMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: isAddingMode => event => {
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
    handleAddMode: () => {
      dispatch(activateAddMode());
    },
    handleMouseMove: isAddingMode => event => {
      if (!isAddingMode) {
        return;
      }
      const { width, height, x, y } = event.target.getBoundingClientRect();
      if (event.target.id == "mask") return;
      const mask = {
        height,
        width,
        x,
        y
      };
      setTimeout(() => {
        dispatch(updateMask(mask));
      }, 300);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
