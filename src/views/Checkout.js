import React, { Component } from "react";
import { Input, Button, FormGroup, Label } from "reactstrap";

import Shell from "../components/Shell";

import OffCanvas from "react-aria-offcanvas";

const AddressForm = () => (
  <div className="location">
    <div className="col-12 overlay-maroon">
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
          <div className="button-form">
            <button className="btn btn-sm btn-success btn-submit">
              <span>Add address</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const PaymentForm = () => (
  <div className="payment">
    <div className="col-12 overlay-maroon">
      <div className="top">
        <h2>Payment information</h2>
      </div>
      <div className="bottom">
        <div>
          <form className="form">
            <input
              className="form-control"
              type="text"
              name="card-name"
              placeholder="Cardholder name"
              style={{ margin: "15px 0" }}
            />
            <input
              className="form-control"
              type="number"
              name="card-number"
              placeholder="Card Number"
              style={{ margin: "15px 0" }}
            />
            <div className="button-form">
              <button className="btn btn-sm btn-success btn-submit">
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const PickupForm = () => (
  <div className="pickup">
    <div className="col-12 overlay-maroon">
      <div className="top">
        <i className="fas fa-truck fa-7x" />
        <h2>Choose a Pickup Time</h2>
      </div>
      <div className="bottom">
        <form className="form">
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 2:00 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 2:30 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 3:00 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 3:30 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 4:00 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 4:30 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 5:00 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 7:00 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 7:30 pm
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> 8:00 pm
              </Label>
            </FormGroup>
          </FormGroup>
          <div className="button-form">
            <button className="btn btn-sm btn-success btn-submit">
              <span>Select this time</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.onLocationClick = this.onLocationClick.bind(this);
    this.onPickupClick = this.onPickupClick.bind(this);
    this.onPaymentClick = this.onPaymentClick.bind(this);
    this.state = {
      isOpenNewItem: false,
      isOpenLocation: false,
      isOpenPickup: false,
      isOpenPayment: false
    };
  }

  open = e => {
    e.preventDefault();
    const currentState = this.state.isOpenNewItem;
    console.log(currentState);

    this.setState({
      isOpenNewItem: !currentState,
      isOpenLocation: false,
      pickupStatus: false,
      paymentStatus: false
    });
  };

  closeNewItem = () => {
    this.setState({
      isOpenNewItem: false
    });
  };

  closeLocation = () => {
    this.setState({
      isOpenLocation: false
    });
  };

  closePickup = () => {
    this.setState({
      isOpenPickup: false
    });
  };

  closePayment = () => {
    this.setState({
      isOpenPayment: false
    });
  };

  onLocationClick = e => {
    e.preventDefault();
    const currentState = this.state.isOpenLocation;
    console.log(currentState);

    this.setState({
      isOpenLocation: !currentState,
      isOpenNewItem: false,
      pickupStatus: false,
      paymentStatus: false
    });
  };

  onPickupClick = e => {
    e.preventDefault();
    const currentState = this.state.isOpenPickup;
    this.setState({
      isOpenPickup: !currentState,
      locationStatus: false,
      paymentStatus: false
    });
  };

  onPaymentClick = e => {
    e.preventDefault();
    const currentState = this.state.isOpenPayment;
    this.setState({
      isOpenPayment: !currentState,
      locationStatus: false,
      pickupStatus: false
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
                  aria-expanded={this.state.isOpenNewItem}
                  onClick={this.open}
                >
                  New Items
                </Button>
                <OffCanvas
                  isOpen={this.state.isOpenNewItem}
                  onClose={this.closeNewItem}
                  labelledby="menu-button"
                >
                  <div className="btn-close" onClick={this.closeNewItem}>
                    <i className="fa fa-times" />
                  </div>
                  <h1>hello</h1>
                </OffCanvas>
              </div>

              <div className="checkout-details-section">
                <Button
                  className="btn btn-light"
                  outline
                  color="secondary"
                  size="sm"
                  block
                  aria-expanded={this.state.isOpenLocation}
                  onClick={this.onLocationClick}
                >
                  Add a Location
                </Button>
                <OffCanvas
                  isOpen={this.state.isOpenLocation}
                  onClose={this.closeLocation}
                  labelledby="menu-button"
                >
                  <div className="btn-close" onClick={this.closeLocation}>
                    <i className="fa fa-times" />
                  </div>
                  <AddressForm />
                </OffCanvas>
              </div>

              <div className="checkout-details-section">
                <Button
                  className="btn btn-light"
                  outline
                  color="secondary"
                  size="sm"
                  block
                  aria-expanded={this.state.isOpenPickup}
                  onClick={this.onPickupClick}
                >
                  Pickup time
                </Button>
                <OffCanvas
                  isOpen={this.state.isOpenPickup}
                  onClose={this.closePickup}
                  labelledby="menu-button"
                >
                  <div className="btn-close" onClick={this.closePickup}>
                    <i className="fa fa-times" />
                  </div>
                  <PickupForm />
                </OffCanvas>
              </div>

              <div className="checkout-details-section">
                <Button
                  className="btn btn-light"
                  outline
                  color="secondary"
                  size="sm"
                  block
                  aria-expanded={this.state.isOpenPayment}
                  onClick={this.onPaymentClick}
                >
                  Please enter payment information
                </Button>
                <OffCanvas
                  isOpen={this.state.isOpenPayment}
                  onClose={this.closePayment}
                  labelledby="menu-button"
                >
                  <div className="btn-close" onClick={this.closePickup}>
                    <i className="fa fa-times" />
                  </div>
                  <PaymentForm />
                </OffCanvas>
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
