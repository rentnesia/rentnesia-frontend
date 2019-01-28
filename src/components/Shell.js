import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

class Shell extends React.Component {
  static propTypes = {
    state: PropTypes.object,
    props: PropTypes.any
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
    return (
      <div style={{ minHeight: "100vh", height: "100%" }}>
        <Header />
        <main
          className="content"
          style={{ minHeight: "100vh", height: "100%" }}
        >
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

const _state = state => ({
  state: {}
});
const _action = dispatch => bindActionCreators({}, dispatch);

export default connect(
  _state,
  _action
)(Shell);
