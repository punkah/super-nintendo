import "bulma/css/bulma.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Send from "./Send";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/send" component={Send} />
        </div>
      </Router>
    );
  }
}

export default App;
