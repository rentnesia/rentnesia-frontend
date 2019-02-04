import React, { Component } from "react";

class Filter extends Component {
  state = { product_type: ["Laptop", "Smartphone", "Smart Device"] };
  render() {
    return (
      <div className="col-3">
        <h6 className="text-normal mt-20px">
          <i className="fas fa-filter" /> Filters
        </h6>
        <div className="card w-100 my-20px">
          <div className="card-body">
            <h6 className="text-normal text-size-12">PRODUCT TYPE</h6>
            {this.state.product_type.map((type, i) => (
              <div key={i} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={type}
                  id={type}
                />
                <label className="form-check-label text-size-12" htmlFor={type}>
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
