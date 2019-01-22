import React, { Component } from "react";
import Navbar from "./components/Navbar";

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

class App extends Component {
  render() {
    return (
      <div>
        <Navbar links={links} />
      </div>
    );
  }
}

export default App;
