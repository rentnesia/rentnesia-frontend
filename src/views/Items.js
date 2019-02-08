import React, { Component } from "react";
import { Link } from "react-router-dom";

import Shell from "../components/Shell";
import Filter from "../components/Items/Filter";
import List from "../components/Items/List";

class Items extends Component {
  state = {
    filter: ""
  };

  render() {
    const pageName = this.props.match.params.category;
    const pageId = this.props.location.state.id;
    return (
      <Shell>
        <div className="items">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {pageName}
                </li>
              </ol>
            </nav>
            <div className="row">
              <Filter id={pageId} />
              <List id={pageId} />
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}

export default Items;
