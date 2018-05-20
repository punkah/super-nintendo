import "bulma/css/bulma.css";
import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro" />

        <section className="hero is-info is-large">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHeroB"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <span className="navbar-item">
                      <a className="button is-info is-inverted">
                        <span className="icon">
                          <i className="fab fa-github" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">QuickShift</p>
              <p className="subtitle">Last minute shift rescheduling</p>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container">
              <LinkContainer to="/send">
                <p className="title">Launch job request</p>
              </LinkContainer>
            </div>
          </div>
        </section>

        {/* Dashboard */}
      </div>
    );
  }
}

export default Home;
