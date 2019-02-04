import React, { Component, Fragment } from "react";

import Shell from "../components/Shell";
import UserHeader from "../components/UserHeader";
import UserSchedule from "../components/UserSchedule";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Shell>
        <UserHeader />
        <UserSchedule />
      </Shell>
    );
  }
}

export default User;
