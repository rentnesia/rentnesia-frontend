import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import SearchBar from "./Search/SearchBar";
import Filter from "./Search/Filter";
import Result from "./Search/Result";

class Search extends Component {
  static propTypes = {
    state: PropTypes.object,
    listCategories: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      dropdownCategory: false,
      dropdownProduct: false
    };
  }

  handleCategory = () => {
    this.setState({
      dropdownCategory: !this.state.dropdownCategory
    });
  };

  handleProduct = () => {
    this.setState({
      dropdownProduct: !this.state.dropdownProduct
    });
  };

  render() {
    return (
      <div className={`search-container ${this.props.status ? "active" : ""}`}>
        <SearchBar handle={this.props.handle} />
        <Filter
          handleCategory={this.handleCategory}
          statusCategory={this.state.dropdownCategory}
          statusProduct={this.state.dropdownProduct}
          handleProduct={this.handleProduct}
        />
        <Result />
      </div>
    );
  }
}

const _state = state => ({
  state: {
    category: state.category.list
  }
});
const _action = dispatch => bindActionCreators({}, dispatch);
export default connect(
  _state,
  _action
)(Search);
