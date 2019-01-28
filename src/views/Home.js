import React, { Component } from "react";

import Shell from "../components/Shell";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Shell>
        <h1>Hello</h1>
      </Shell>
    );
  }
}

export default Home;
