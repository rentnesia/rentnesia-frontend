import React, { Component } from "react";
import { Link } from "react-router-dom";

import Shell from "../components/Shell";
import Filter from "../components/Items/Filter";
import List from "../components/Items/List";

class Items extends Component {
  state = {};
  render() {
    const pageName = this.props.match.params.name;
    return (
      <Shell>
        <div className="items">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {pageName}
                </li>
              </ol>
            </nav>
            <div className="row">
              <Filter />
              <List />
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}

export default Items;
