import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  Modal,
  ModalBody,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { message, Select } from "antd";
import ImagePicker from "filestack-react";

import { createItems, setForm } from "../../modules/item";
import { listProductTypes } from "../../modules/product_type";

const Option = Select.Option;

class AddItem extends Component {
  static propTypes = {
    state: PropTypes.object,
    createItems: PropTypes.func,
    listProductTypes: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.listProductTypes();
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {
      name,
      description,
      label,
      price_per_day,
      picture
    } = this.props.state.items.create.form;
    if (name.length <= 0) {
      message.error("Name wajib diisi!");
    } else if (description.length <= 0) {
      message.error("Description wajib diisi!");
    } else if (label.length <= 0) {
      message.error("Label wajib diisi!");
    } else if (price_per_day.length <= 0) {
      message.error("Price per day wajib diisi!");
    } else if (!picture) {
      message.error("Picture wajib diisi!");
    } else {
      this.props.createItems(this.props.state.item.create.form);
      await this.props.toggle();
    }
  };

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.props.setForm(name, value);
  };

  handleImageChange = result => {
    const picture = result.filesUploaded[0].url;

    this.props.setForm("picture", picture);
  };

  handleSelectChange = value => {
    this.props.setForm("product_type_id", value);
  };

  render() {
    return (
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

          <div className="right-container">
            <Nav tabs className="navTabs">
              <NavItem className="switchNav_Item">
                <NavLink id="switchNav_Item_Active" className="active">
                  Add Item
                  <div className="small-border-section" />
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane>
                <Form onSubmit={this.handleSubmit} className="formContainer">
                  <div className="md-form">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="md-form">
                    <Input
                      type="text"
                      name="description"
                      placeholder="Description"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  {/* <div className="md-form">
                    <Input
                      type="text"
                      name="label"
                      placeholder="Label(ex:)"
                      onChange={this.handleInputChange}
                    />
                  </div> */}
                  <div className="md-form">
                    <Input
                      type="number"
                      name="price_per_day"
                      placeholder="Price per day"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="md-form">
                    <Input
                      type="text"
                      name="status"
                      value="Available (Auto)"
                      disabled
                    />
                  </div>
                  <div className="md-form">
                    <Select
                      showSearch
                      placeholder="Select a Product Type"
                      onChange={this.handleSelectChange}
                    >
                      {this.props.state.product_type.map((item, i) => (
                        <Option key={i} value={item.id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div className="md-form">
                    <ImagePicker
                      apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                      onSuccess={this.handleImageChange}
                      render={({ onPick }) => (
                        <button
                          className="btn btn-sm btn-animate btn-animate-side-right btn-secondary"
                          onClick={onPick}
                        >
                          <span>
                            <i
                              className="icon fas fa-camera-retro"
                              aria-hidden="true"
                            />{" "}
                            Add Image
                          </span>
                        </button>
                      )}
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
                      type="submit"
                    >
                      <span>
                        <i
                          className="icon fas fa-camera-retro"
                          aria-hidden="true"
                        />
                        Submit
                      </span>
                    </button>
                  </div>
                </Form>
              </TabPane>
            </TabContent>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

const _state = state => ({
  state: {
    items: state.item,
    product_type: state.product_type.list.data
  }
});

const _action = dispatch =>
  bindActionCreators(
    {
      createItems,
      setForm,
      listProductTypes
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(AddItem);
