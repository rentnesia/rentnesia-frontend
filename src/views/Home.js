import React, { Component } from "react";

import Shell from "../components/Shell";
import Carousel from "../components/Home/Carousel";
import CardsMenu from "../components/Home/CardsMenu";
import Article from "../components/Home/Article";
import Testimonial from "../components/Home/Testimonial";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Shell>
        <Carousel />
        <CardsMenu />
        <Article />
        <Testimonial />
      </Shell>
    );
  }
}

export default Home;
