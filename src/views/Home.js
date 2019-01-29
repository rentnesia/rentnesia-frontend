import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

import Shell from "../components/Shell";

const options = {
  items: 1,
  navText: [
    `<img src='/images/carousel/button/chevron-left.png'>`,
    `<img src='/images/carousel/button/chevron-right.png'>`
  ],
  nav: true,
  rewind: true,
  autoplay: true
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Shell>
        <OwlCarousel id="home-carousel" options={options}>
          <div>
            <img
              className="w-100"
              src="/images/carousel/calleven_web.png"
              alt="Call Even"
            />
          </div>
          <div>
            <img
              className="w-100"
              src="/images/carousel/freeboxchange.png"
              alt="Free Box Change"
            />
          </div>
          <div>
            <img
              className="w-100"
              src="/images/carousel/newyouweb.png"
              alt="Ikea"
            />
          </div>
        </OwlCarousel>
      </Shell>
    );
  }
}

export default Home;
