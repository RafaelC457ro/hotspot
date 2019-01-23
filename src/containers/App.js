import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import List from "../components/List";
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

const items = [
  {
    id: "1",
    description: "HostSpot 1"
  },
  {
    id: "2",
    description: "HostSpot 2"
  },
  {
    id: "3",
    description: "HostSpot 3"
  }
];

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar links={links} />
        </header>
        <div className="Container">
          <div className="Container-content">
            <div className="Container-action">
              <Button title="Create a Hotspot" />
            </div>
            <List title="List of hotspot" items={items} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
