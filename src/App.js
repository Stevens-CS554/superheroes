import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Site from "./Site";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Site} />
      </Router>
    );
  }
}

export default App;
