import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import PropTypes from "prop-types";
import { Form, Input } from "reactstrap";

import { tryLogin, errorMessage, setForm } from "../../modules/login";

class SignIn extends Component {
  static propTypes = {
    state: PropTypes.object,
    errorMessage: PropTypes.func,
    tryLogin: PropTypes.func,
    setForm: PropTypes.func
  };

  static defaultProps = {
    state: {},
    errorMessage: false,
    tryLogin: false,
    setForm: false
  };

  validateForm = async e => {
    e.preventDefault();
    const { email, password } = this.props.state.login.form;
    if (email.length <= 0) {
      this.props.errorMessage("Email wajib diisi!");
    } else if (password.length <= 0) {
      this.props.errorMessage("Password wajib diisi!");
    } else {
      this.props.tryLogin(this.props);
    }
    await this.props.toggle();
  };

  handleInputChange = event => {
    const { target } = event;
    const { value, name } = target;

    this.props.setForm(name, value);
  };

  render() {
    const { loading } = this.props.state.login;
    const icon = <i className="fas fa-circle-o-notch fa-spin" />;

    return (
      <Form onSubmit={this.validateForm} className="formContainer">
        <div className="md-form">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="md-form">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleInputChange}
          />
        </div>
        <small>Forgot Password ?</small>
        <button
          className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
          disabled={loading}
          type="submit"
        >
          {loading ? (
            icon
          ) : (
            <span>
              SIGN IN
              <i className="icon fas fa-arrow-right" aria-hidden="true" />
            </span>
          )}
        </button>
      </Form>
    );
  }
}

const _state = state => ({
  state: {
    login: state.login
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      loginSuccess: () => push(`${process.env.PUBLIC_URL}/`),
      tryLogin,
      errorMessage,
      setForm
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(SignIn);
