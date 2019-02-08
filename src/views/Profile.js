import React, { Component } from "react";

import Shell from "../components/Shell";
import List from "../components/Profile/List";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Shell>
        <List />
      </Shell>
    );
  }
}

export default Profile;
