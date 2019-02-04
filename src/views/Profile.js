import React, { Component } from "react";

import Shell from "../components/Shell";
import UserHeader from "../components/UserHeader";
import UserProfile from "../components/UserProfile";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Shell>
        <UserHeader />
        <UserProfile />
      </Shell>
    );
  }
}

export default Profile;
