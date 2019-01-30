import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  Button,
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

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeTab: "1",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: ""
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

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
        <Button color="danger" onClick={this.toggleModal}>
          Login / SignUp
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="lg">
          <ModalBody>
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
                  Login
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="4">
                    <img
                      src="/images/icons8-rent-filled.png"
                      class="img-fluid"
                      alt="rent"
                    />
                  </Col>
                  <Col sm="8">
                    <Form
                      onSubmit={this.handleSubmit}
                      className="formContainer"
                    >
                      <FormGroup className="FormField">
                        <Input
                          type="text"
                          name="name"
                          placeholder="Full name"
                          onChange={this.handleChange}
                          value={this.state.name}
                        />
                      </FormGroup>
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
                          type="number"
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
                      <Button
                        disabled={
                          this.state.password !== this.state.confirmPassword
                        }
                        type="submit"
                      >
                        Sign up
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="4">
                    <img
                      src="/images/icons8-rent-filled.png"
                      class="img-fluid"
                      alt="rent"
                    />
                  </Col>
                  <Col sm="8">
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
                      <Button type="submit">Log in</Button>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Container;
