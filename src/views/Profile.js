import React, { Component } from "react";

import Shell from "../components/Shell";
import Detail from "../components/Profile/Detail";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Shell>
        <Detail />
      </Shell>
    );
  }
}

export default Profile;
