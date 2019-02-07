import React, { Component } from "react";
import { Input, Button } from "reactstrap";

import Shell from "../components/Shell";

import OffCanvas from "react-aria-offcanvas";

const AddressForm = () => (
  <div className="location col-6 flex-fix overlay-maroon">
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
              <i className="icon fa fa-paper-plane" aria-hidden="true" />
              Add address
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
);

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  open = () => {
    this.setState({
      isOpen: true
    });
  };

  close = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Shell>
        <div className="container">
          <div className="checkout">
            <div className="col-6 checkout-details">
              <h1 className="checkout-title">Confirm Order</h1>
              <div className="checkout-title-details">
                <h2>Details</h2>
              </div>
              <div className="checkout-details-section">
                <Button
                  className="btn btn-light"
                  outline
                  color="secondary"
                  size="sm"
                  block
                  aria-expanded={this.state.isOpen}
                  onClick={this.open}
                >
                  New Items
                </Button>
              </div>
              <div className="checkout-details-section">
                <h5>Address</h5>
                <Button
                  class="btn"
                  outline
                  color="secondary"
                  size="sm"
                  block
                  aria-expanded={this.state.isOpen}
                  onClick={this.open}
                >
                  Add a location
                </Button>
                <OffCanvas
                  isOpen={this.state.isOpen}
                  onClose={this.close}
                  labelledby="menu-button"
                >
                  <div className="btn-close" onClick={this.close}>
                    <i className="fa fa-times" />
                  </div>
                  <AddressForm />>
                </OffCanvas>
              </div>
              <div className="checkout-details-section">
                <h5>Pick-up</h5>
                <Button
                  class="btn btn-light"
                  outline
                  color="secondary"
                  size="sm"
                  block
                  aria-expanded={this.state.isOpen}
                  onClick={this.open}
                >
                  Pickup time
                </Button>
              </div>
              <div className="checkout-details-section">
                <h5>Payment</h5>
                <Button
                  class="btn btn-light"
                  outline
                  color="secondary"
                  size="sm"
                  block
                  aria-expanded={this.state.isOpen}
                  onClick={this.open}
                >
                  Please enter payment information
                </Button>
              </div>
              <div className="checkout-details-section">
                <h5>Notes for your Concierge</h5>
                <Input
                  type="textarea"
                  name="notes"
                  size="sm"
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
                <p className="price-label">Total</p>
                <p className="price-rent">IDR ...</p>
              </div>
              <div className="checkout-pricing-section">
                <button className="button-apply btn btn-sm btn-success btn-submit">
                  <span>Add an Address</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}

export default Checkout;
