import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { goBack } from "connected-react-router";
import PropTypes from "prop-types";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { message } from "antd";
import { distanceInWords } from "date-fns";

// import t from "typy";
import axios from "axios";

import { Input } from "reactstrap";
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
    location: "",
    startDate: "",
    distanceDate: "",
    endDate: "",
    disc_week: 10,
    disc_month: 22,
    modalCon: false,
    modalOrder: false
  };

  componentDidMount() {
    const itemId = this.props.match.params.itemId;
    this.props.getItemById(itemId);
  }

  handleGoBack = params => {
    // this.props.goBack(`${process.env.PUBLIC_URL}/items/${category}`);
  };

  handleClick = e => {
    e.preventDefault();
    let distance = parseInt(
      distanceInWords(this.state.startDate, this.state.endDate).split(" ")[0]
    );
    this.setState({
      distanceDate: distance
    });
    const body = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      location: this.state.location
    };

    if (body.location.length <= 0) {
      message.error("Location wajib diisi!");
    } else if (!body.startDate) {
      message.error("StartDate wajib diisi!");
    } else if (!body.endDate) {
      message.error("EndDate wajib diisi!");
    } else {
      this.setState({
        modalOrder: true
      });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModalCon = () => {
    this.setState({ modalCon: !this.state.modalCon });
  };

  handleModalOrder = () => {
    this.setState({ modalOrder: !this.state.modalOrder });
  };

  handleModalOrderClick = () => {
    const itemId = this.props.match.params.itemId;
    const userId = sessionStorage.getItem("userIdDecrypted");

    const body = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      item_id: parseInt(itemId),
      renter_id: parseInt(userId),
      location: this.state.location,
      status: "waiting"
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/history`, body)
      .then(res => {
        message.success("Sukses Berhasil!");
      })
      .catch(err => {
        message.error("Field wajib diisi!");
      });
  };

  render() {
    const data = this.props.state.detail.data;

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
                    src={`${item.picture}`}
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
            <Modal
              isOpen={this.state.modalOrder}
              toggle={this.handleModalOrder}
              size="md"
              centered
            >
              {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
              <ModalBody className="py-30px">
                <h3 className="mt-20px mb-30px">Checkout</h3>
                <table className=" table table-striped w-100">
                  {data.map((item, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>Name Item</td>
                        <td className="text-w600">{item.name}</td>
                      </tr>
                      <tr>
                        <td>Price Per Day</td>
                        <td className="text-w600">IDR {item.price_per_day}</td>
                      </tr>
                      <tr>
                        <td>Date Rent</td>
                        <td className="text-w600">
                          {this.state.startDate}{" "}
                          <i className="fas fa-arrow-right text-w-400 text-size-12" />{" "}
                          {this.state.endDate}
                        </td>
                      </tr>
                      <tr>
                        <td>Distance Rent</td>
                        <td className="text-w600">{this.state.distanceDate}</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td className="text-size-18 text-w600">
                          IDR {this.state.distanceDate * item.price_per_day}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </ModalBody>
              <ModalFooter>
                <button
                  className="btn btn-sm btn-animate btn-animate-side-right btn-secondary"
                  onClick={() => {
                    this.handleModalOrder();
                  }}
                >
                  <span>
                    Cancel
                    <i className="icon fas fa-times" aria-hidden="true" />
                  </span>
                </button>
                <button
                  className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
                  onClick={() => {
                    this.handleModalCon();
                    this.handleModalOrder();
                  }}
                >
                  <span>
                    Next
                    <i className="icon fas fa-arrow-right" aria-hidden="true" />
                  </span>
                </button>
              </ModalFooter>
            </Modal>
            <Modal
              isOpen={this.state.modalCon}
              toggle={this.handleModalCon}
              size="md"
              centered
            >
              {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
              <ModalBody>
                <div
                  className="w-100 d-flex justify-content-center"
                  style={{ height: "200px" }}
                >
                  <img
                    src="/images/article/red_store_items.svg"
                    alt="delivered"
                    width="50%"
                  />
                </div>
                <div className="w-100 text-center">
                  <h5>Congratulations!</h5>
                  <h6>
                    Within 3 days the item will be sent according to location
                  </h6>
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  className="btn btn-sm btn-animate btn-animate-side-right btn-danger"
                  onClick={() => {
                    this.handleModalCon();
                    this.handleModalOrderClick();
                  }}
                >
                  <span>
                    Close
                    <i className="icon fas fa-times" aria-hidden="true" />
                  </span>
                </button>
              </ModalFooter>
            </Modal>
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
