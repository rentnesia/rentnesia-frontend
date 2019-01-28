import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class Header extends React.Component {
  static propTypes = {
    state: PropTypes.object
  };

  static defaultProps = {
    state: {},
    children: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div />;
  }
}

const _state = state => ({
  state: {}
});
const _action = dispatch => bindActionCreators({}, dispatch);

export default connect(
  _state,
  _action
)(Header);
