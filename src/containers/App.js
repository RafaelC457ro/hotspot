import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import List from "../components/List";
import HostSpot from "../components/Hotspots";
import { addHotspot, activateAddMode } from "../actions/hotspots";
import "./App.css";

const links = [
  {
    url: "#1",
    description: "Link Fake 1"
  },
  {
    url: "#2",
    description: "Link Fake 2"
  },
  {
    url: "#3",
    description: "Link Fake 3"
  },
  {
    url: "#4",
    description: "Link Fake 4"
  }
];

const App = ({ hotspots, isAddingMode, handleClick, handleAddMode }) => (
  <div className="App" onClick={handleClick(isAddingMode)}>
    <header>
      <Navbar links={links} />
    </header>
    <div className="Container">
      <div className="Container-content">
        <div className="Container-action">
          <Button title="Create a Hotspot" onClick={handleAddMode} />
        </div>
        <List />
      </div>
    </div>
    <HostSpot items={hotspots} />
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
