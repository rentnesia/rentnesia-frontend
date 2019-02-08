import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { goBack } from "connected-react-router";
import PropTypes from "prop-types";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { message } from "antd";

// import t from "typy";
import axios from "axios"

import { Input } from "reactstrap"
import Shell from "../components/Shell";

import { getItemById } from "../modules/item";

class SelectedItem extends Component {
  static propTypes = {
    state: PropTypes.object,
    goBack: PropTypes.func,
    getItemById: PropTypes.func
  };

  static defaultProps = {
    state: {},
    detail: { data: [] }
  };

  state = {
    location: null,
    startDate: null,
    endDate: null,
    disc_week: 10,
    disc_month: 22,
    modal: false

  };

  componentDidMount() {
    const itemId = this.props.match.params.itemId;
    this.props.getItemById(itemId);
  }

  handleGoBack = params => {
    console.log(params);
    // this.props.goBack(`${process.env.PUBLIC_URL}/items/${category}`);
  };

  handleClick = (e) => {
    e.preventDefault()
    const itemId = this.props.match.params.itemId
    const userId = sessionStorage.getItem('userIdDecrypted');

    const body = {
      "startDate": this.state.startDate,
      "endDate": this.state.startDate,
      "item_id": parseInt(itemId),
      "renter_id": parseInt(userId),
      "location": this.state.location,
      "status": "waiting"
    }

    axios.post(`${process.env.REACT_APP_API_URL}/api/v1/history`, body).then((res) => {
      this.setState({ modal: true })
    }).catch((err) => {
      message.error("First Name wajib diisi!");
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const data = this.props.state.detail.data;
    console.log(data)

    return (
      <Shell>
        {data.map(item => (
          <div key={item.id} className="selected-item">
            <div className="container">
              <div className="row my-30px">
                <div className="col-3">
                  <Link
                    to={{
                      pathname: `/items/${item.product_type.category.name}`,
                      state: { id: `${item.product_type.category_id}` }
                    }}
                    className="d-flex align-items-center navigation"
                  >
                    <i className="fas fa-chevron-left" />
                    <span className="text-size-14 ml-20px">
                      Back to Categories
                    </span>
                  </Link>
                </div>
              </div>
              <div className="row mt-20px">
                <div className="col-7">
                  <img
                    className="img-item"
                    src={`/images/${item.picture}`}
                    alt={item.name}
                  />
                  {/* <div className="row mt-20px">
                  <div className="col-2">
                    <img
                      src={`/images/testimonials/${item.owner_img}`}
                      className="img-owner"
                      alt={item.owner}
                    />
                  </div>
                  <div className="col-10 d-flex align-items-center">
                    <div>
                      <h6 className="mb-1px">Gibran</h6>
                      <span className="text-size-14">45 items for rent</span>
                    </div>
                  </div>
                </div> */}
                </div>
                <div className="col-4 offset-1">
                  <h3 className="mb-5px">{item.name}</h3>
                  <h6 className="text-normal mt-0px">
                    {item.product_type.category.name.toUpperCase()}{" "}
                    <i className="fas fa-chevron-right text-size-14 mx-5px" />{" "}
                    {item.product_type.name.toUpperCase()}
                  </h6>
                  <div className="row my-40px">
                    <div className="col-4">
                      <h6 style={{ marginBottom: "-3px" }}>
                        IDR {item.price_per_day}
                      </h6>
                      <span className="text-size-13 text-w500 color-grey">
                        per day
                      </span>
                    </div>
                    <div className="col-4">
                      <h6 style={{ marginBottom: "-3px" }}>
                        -{this.state.disc_week}%
                      </h6>
                      <span className="text-size-13 text-w500 color-grey">
                        7+ days
                      </span>
                    </div>
                    <div className="col-4">
                      <h6 style={{ marginBottom: "-3px" }}>
                        -{this.state.disc_month}%
                      </h6>
                      <span className="text-size-13 text-w500 color-grey">
                        28+ days
                      </span>
                    </div>
                  </div>
                  <p className="border-bottom pb-25px">{item.description}</p>
                  <form>
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="location"
                          aria-describedby="location"
                          placeholder="Location"
                          name="location"
                          onChange={this.handleChange}
                          value={this.state.location}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fas fa-map-marker-alt" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Start Date</label>
                      <div className="input-group">
                        <Input
                          type="date"
                          id="exampleDate"
                          placeholder="date placeholder"
                          name="startDate"
                          onChange={this.handleChange}
                          value={this.state.startDate}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fas fa-calendar" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">End Date</label>
                      <div className="input-group">
                        <Input
                          type="date"
                          id="exampleDate"
                          placeholder="date placeholder"
                          name="endDate"
                          onChange={this.handleChange}
                          value={this.state.endDate}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fas fa-calendar" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-animate btn-animate-vertical btn-danger"
                      onClick={this.handleClick}
                    >
                      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                      <span>
                        RENT NOW
                        <i
                          className="icon fas fa-truck-moving"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Shell>
    );
  }
}

const _state = state => ({
  state: {
    detail: state.item.detail
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      goBack,
      getItemById
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(SelectedItem);
