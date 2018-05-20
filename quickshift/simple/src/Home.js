import "bulma/css/bulma.css";
import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro" />

        <section className="hero is-info is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">QuickShift</p>
              <p className="subtitle">Last minute shift rescheduling</p>
            </div>
          </div>
        </section>
        <div className="container">
          <LinkContainer to="/send">
            <p className="button" style={{ margin: "10" }}>
              Launch job request
            </p>
          </LinkContainer>
        </div>
        {/* Dashboard */}
      </div>
    );
  }
}

export default Home;
