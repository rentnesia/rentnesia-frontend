import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { listItems } from "../../modules/item";
import { listProductsById } from "../../modules/product_type";

class Filter extends Component {
  static propTypes = {
    state: PropTypes.object,
    listItems: PropTypes.func,
    listProductsById: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  componentDidMount() {
    this.props.listProductsById(this.props.id);
  }

  state = {};

  handleCheckBox = async e => {
    const { target } = e;
    const { value } = target;

    this.props.listItems("DESC", "", value);
  };

  render() {
    return (
      <div className="col-3">
        <h6 className="text-normal mt-20px">
          <i className="fas fa-filter" /> Filters
        </h6>
        <div className="card w-100 my-20px">
          <div className="card-body">
            <h6 className="text-normal text-size-12">PRODUCT TYPE</h6>
            {this.props.state.product_type.data.map((type, i) => (
              <div key={i} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filter"
                  value={type.id}
                  id={type.id}
                  onChange={this.handleCheckBox}
                />
                <label
                  className="form-check-label text-size-12"
                  htmlFor={type.id}
                >
                  {type.name.toUpperCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const _state = state => ({
  state: {
    product_type: state.product_type.list
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      listItems,
      listProductsById
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(Filter);
