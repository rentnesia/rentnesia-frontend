import React, { Component } from "react";

import Shell from "../components/Shell";
import Schedule from "../components/Profile/Schedule";
import List from "../components/Profile/List";
import UserProfile from "../components/Profile/UserProfile";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Shell>
        <div className="profile">
          <div className="container">
            <UserProfile />
            <Schedule />
            <List />
          </div>
        </div>
      </Shell>
    );
  }
}

export default Profile;
