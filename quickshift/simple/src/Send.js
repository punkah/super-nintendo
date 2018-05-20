import "bulma/css/bulma.css";
import React, { Component } from "react";
import sms from "./sms";

class Send extends Component {
  constructor() {
    super();
    this.state = {
      yes: false
    };
  }

  componentDidMount() {
    sms.sendsms().then(message => {
      console.log(message);
      this.setState({ yes: true });
    });
  }

  render() {
    const { yes } = this.state;
    return (
      <div>
        <section className="hero is-info is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">Waiting on an answer... </p>
              {yes && <div>Heather answered yes!</div>}
            </div>
          </div>
          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container" />
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

export default Send;
