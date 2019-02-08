import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { getUserById } from "../../modules/user";

class UserProfile extends Component {
  static propTypes = {
    state: PropTypes.object,
    getUserById: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  state = {
    first_name: "$first_name",
    last_name: "$last-name"
  };

  componentDidMount() {
    let id;
    if (sessionStorage.getItem("userIdDecrypted")) {
      id = sessionStorage.getItem("userIdDecrypted");
    }
    this.props.getUserById(id);
  }

  render() {
    const { user } = this.props.state.detail;
    return (
      <div className="d-flex justify-content-center">
        {user ? (
          <div className="user-profile">
            <img src="/images/user.png" className="user-img" alt="user" />
            <div className="ml-25px">
              <h3 className="mb-1px">{`${user.first_name} ${
                user.last_name
              }`}</h3>
              <span>{user.email}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const _state = state => ({
  state: {
    detail: state.user.detail.data,
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      getUserById
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(UserProfile);
