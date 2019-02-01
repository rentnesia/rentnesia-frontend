import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";

import classnames from "classnames";

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      signIn: {
        email: "",
        password: ""
      }
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleConfirmPassword = event => {
    if (event.target.value !== this.state.password) {
      console.log("failed");
      this.setState({ confirmPassword: event.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.status}
          toggle={this.props.toggle}
          size="lg"
          centered
        >
          <ModalBody>
            <div className="btn-close">
              <img
                src="/images/close.png"
                className="icon-close"
                alt="btn-close"
                onClick={this.props.toggle}
              />
            </div>
            <Row>
              <Col sm="4" className="left-container text-center">
                <img
                  src="/images/login-container.svg"
                  alt="Login Container"
                  width="60%"
                />
              </Col>
              <Col sm="8" className="right-container">
                <Nav tabs className="navTabs">
                  <NavItem className="switchNav_Item">
                    <NavLink
                      id="switchNav_Item_Active"
                      className={classnames({
                        active: this.state.activeTab === "1"
                      })}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      Sign up
                      <div className="small-border-section" />
                    </NavLink>
                  </NavItem>
                  <NavItem className="switchNav_Item">
                    <NavLink
                      id="switchNav_Item_Active"
                      className={classnames({
                        active: this.state.activeTab === "2"
                      })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      Sign In
                      <div className="small-border-section" />
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Form
                      onSubmit={this.handleSubmit}
                      className="formContainer"
                    >
                      <div className="row">
                        <div className="col-6">
                          <FormGroup className="FormField">
                            <Input
                              type="text"
                              name="first_name"
                              placeholder="First name"
                              onChange={this.handleChange}
                              value={this.state.name}
                            />
                          </FormGroup>
                        </div>
                        <div className="col-6">
                          <FormGroup className="FormField">
                            <Input
                              type="text"
                              name="last_name"
                              placeholder="Last name"
                              onChange={this.handleChange}
                              value={this.state.name}
                            />
                          </FormGroup>
                        </div>
                      </div>
                      <FormGroup className="FormField">
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                      </FormGroup>
                      <FormGroup className="FormField">
                        <Input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          onChange={this.handleChange}
                          value={this.state.phoneNumber}
                        />
                      </FormGroup>
                      <FormGroup className="FormField">
                        <Input
                          type="password"
                          name="password"
                          placeholder="Create a Password"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </FormGroup>
                      <FormGroup className="FormField">
                        <Input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          onChange={this.handleChange}
                          value={this.state.confirmPassword}
                        />
                      </FormGroup>
                      <small>
                        By signing up, you agree to Rentnesia{" "}
                        <b>Terms and Conditions & Privacy Policy</b>
                      </small>
                      <button
                        className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
                        disabled={
                          this.state.password !== this.state.confirmPassword ||
                          this.state.first_name.length <= 1 ||
                          this.state.last_name.length <= 1 ||
                          this.state.email.length <= 1 ||
                          this.state.phoneNumber.length <= 1 ||
                          this.state.password.length < 1 ||
                          this.state.confirmPassword.length < 1
                        }
                        type="submit"
                      >
                        <span>
                          SIGN UP
                          <i
                            className="icon fas fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </Form>
                  </TabPane>
                  <TabPane tabId="2">
                    <Form
                      onSubmit={this.handleSubmit}
                      className="formContainer"
                    >
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </FormGroup>
                      <small>Forgot Password ?</small>
                      <button
                        className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
                        disabled={
                          this.state.signIn.email.length < 1 ||
                          this.state.signIn.password.length < 1
                        }
                        type="submit"
                      >
                        <span>
                          SIGN IN
                          <i
                            className="icon fas fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </Form>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Sign;
