import React, { Component } from "react";
import { Input } from "reactstrap";

import Shell from "../components/Shell";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.onLocationClick = this.onLocationClick.bind(this);
    this.onPickupClick = this.onPickupClick.bind(this);
    this.onPaymentClick = this.onPaymentClick.bind(this);
    this.state = {
      locationStatus: false,
      pickupStatus: false,
      paymentStatus: false
    };
  }

  onLocationClick = e => {
    e.preventDefault();
    const currentState = this.state.locationStatus;
    this.setState({
      locationStatus: !currentState,
      pickupStatus: false,
      paymentStatus: false
    });
  };

  onPickupClick = e => {
    e.preventDefault();
    const currentState = this.state.pickupStatus;
    this.setState({
      pickupStatus: !currentState,
      locationStatus: false,
      paymentStatus: false
    });
  };

  onPaymentClick = e => {
    e.preventDefault();
    const currentState = this.state.paymentStatus;
    this.setState({
      paymentStatus: !currentState,
      locationStatus: false,
      pickupStatus: false
    });
  };
  render() {
    const { locationStatus, pickupStatus, paymentStatus } = this.state;
    return (
      <Shell>
        <div className="container">
          <div className="checkout">
            <div
              className={`location ${locationStatus ? "selected" : ""} ${
                pickupStatus ? "close" : ""
              } ${paymentStatus ? "close" : ""}  `}
              id="location"
            />

            <div className="col-6 checkout-details">
              <h1 className="checkout-title">Confirm Order</h1>
              <div className="checkout-title-details">
                <h2>Details</h2>
              </div>
              <div className="checkout-details-section">
                <a class="btn btn-light" href="#" role="button">
                  New Items
                </a>
              </div>
              <div className="checkout-details-section">
                <h5>Address</h5>
                <a class="btn btn-light" href="#" role="button">
                  Add a location
                </a>
              </div>
              <div className="checkout-details-section">
                <h5>Pick-up</h5>
                <a class="btn btn-light" href="#" role="button">
                  Pickup time
                </a>
              </div>
              <div className="checkout-details-section">
                <h5>Payment</h5>
                <a class="btn btn-light" href="#" role="button">
                  Please enter payment information
                </a>
              </div>
              <div className="checkout-details-section">
                <h5>Notes for your Concierge</h5>
                <Input
                  type="textarea"
                  name="notes"
                  placeholder="Notes"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
            </div>

            <div className="col-5 checkout-pricing">
              <div className="checkout-title-details">
                <h2>Pricing</h2>
              </div>
              <div className="checkout-pricing-section">
                <p className="price-label">Rental Fee (1 day)</p>
                <p className="price-rent">IDR ...</p>
              </div>
              <div className="checkout-pricing-section">
                <p className="price-label">Pickup</p>
                <p className="price-rent">IDR ...</p>
              </div>
              <div className="checkout-pricing-section">
                <Input
                  className="promo"
                  type="text"
                  name="promo-input"
                  placeholder="Enter Promo Code"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <button className="button-apply btn btn-sm btn-success btn-submit">
                  Apply
                </button>
              </div>
              <div className="checkout-pricing-section">
                <p className="price-label">Total</p>
                <p className="price-rent">IDR ...</p>
              </div>
              <div className="checkout-pricing-section">
                <button className="button-apply btn btn-sm btn-success btn-submit">
                  <span>Add an Address</span>
                </button>
              </div>
            </div>

            <div className="col-5 flex-fix overlay-maroon">
              <div className="btn-close" onClick={this.onLocationClick}>
                <i className="fa fa-times" />
              </div>
              <div className="top">
                <h2>New Address</h2>
              </div>
              <div className="bottom">
                <form className="form">
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    placeholder="Address"
                    style={{ margin: "15px 0" }}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="address-optional"
                    placeholder="Apartment, suite, etc. (optional)"
                    style={{ margin: "15px 0" }}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="city"
                    placeholder="City"
                    style={{ margin: "15px 0" }}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="state"
                    placeholder="State"
                    style={{ margin: "15px 0" }}
                  />
                  <input
                    className="form-control"
                    type="number"
                    name="zip"
                    placeholder="Zip"
                    style={{ margin: "15px 0" }}
                  />
                  <div className="pull-right">
                    <button className="btn btn-sm btn-animate btn-animate-vertical btn-success btn-submit">
                      <span>
                        <i
                          className="icon fa fa-paper-plane"
                          aria-hidden="true"
                        />
                        Add address
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <div
            className={`pickup ${pickupStatus ? "selected" : ""} ${
              locationStatus ? "close" : ""
            } ${paymentStatus ? "close" : ""}`}
            id="pickup"
          >
            <div className="row h-100">
              <div className="col-8 flex-fix">
                <div className="checkout-details-section">
                  <h3>Pick-up</h3>
                </div>
                <div
                  className="button-form pickup"
                  onClick={this.onPickupClick}
                >
                  <p>Pickup</p>
                </div>
              </div>
            </div>

            <div className="col-4 flex-fix overlay-maroon">
              <div className="btn-close" onClick={this.onJoinClick}>
                <i className="fa fa-times" />
              </div>
              <div className="top">
                <h3>Choose a Pick-up Time</h3>
              </div>
              <div className="bottom" />
            </div>
          </div> */}
        </div>
      </Shell>
    );
  }
}

export default Checkout;
