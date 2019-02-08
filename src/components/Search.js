import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { listItems } from "../modules/item";

import SearchBar from "./Search/SearchBar";
// import Filter from "./Search/Filter";
import Result from "./Search/Result";

class Search extends Component {
  static propTypes = {
    state: PropTypes.object,
    listItems: PropTypes.func
  };

  static defaultProps = {
    state: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      dropdownCategory: false,
      dropdownProduct: false,
      data: [],
      selectedCategory: "",
      selectedProductType: "",
      search: ""
    };
  }

  // handleCategory = () => {
  //   this.setState({
  //     dropdownCategory: !this.state.dropdownCategory
  //   });
  // };

  // handleProduct = () => {
  //   this.setState({
  //     dropdownProduct: !this.state.dropdownProduct
  //   });
  // };

  // handleSelectCategory = value => {
  //   this.props.listItems("DESC", value);
  //   // this.setState({
  //   //   selectedCategory: value
  //   // });
  // };

  // handleSelectProductType = value => {
  //   this.props.listItems("DESC", "", value);
  //   // this.setState({
  //   //   selectedProductType: value
  //   // });
  // };

  handleSearchChange = async e => {
    const { target } = e;
    const { value } = target;

    let id = sessionStorage.getItem("userIdDecrypted");
    if (id) {
      this.props.listItems("DESC", id, "", "", value);
      await this.setState({
        data: this.props.state.items
      });
    } else {
      this.props.listItems("DESC", "", "", "", value);
      await this.setState({
        data: this.props.state.items
      });
    }
  };

  render() {
    return (
      <div className={`search-container ${this.props.status ? "active" : ""}`}>
        <SearchBar
          handleSearch={this.handleSearchChange}
          handle={this.props.handle}
          valueSearch={this.state.search}
        />
        {/* <Filter
          handleCategory={this.handleCategory}
          statusCategory={this.state.dropdownCategory}
          statusProduct={this.state.dropdownProduct}
          handleProduct={this.handleProduct}
          handleSelectCategory={this.handleSelectCategory}
          handleSelectProductType={this.handleSelectProductType}
        /> */}
        <Result handle={this.props.handle} data={this.state.data} />
      </div>
    );
  }
}

const _state = state => ({
  state: {
    items: state.item.list.data
  }
});
const _action = dispatch =>
  bindActionCreators(
    {
      listItems
    },
    dispatch
  );
export default connect(
  _state,
  _action
)(Search);
