import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";


const options = {
  items: 1,
  navText: [
    `<img src='/images/carousel/button/chevron-left.png'>`,
    `<img src='/images/carousel/button/chevron-right.png'>`
  ],
  nav: true,
  loop: true,
  autoplay: true,
  dots: false,
  autoplayTimeout: 5000
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousels: [
        {
          image: "calleven_web.png",
          name: "Call Even"
        },
        {
          image: "freeboxchange.png",
          name: "Free Box Change"
        },
        {
          image: "newyouweb.png",
          name: "New You Web"
        },
        {
          image: "ikea-web.png",
          name: "Ikea Web"
        }
      ]
    };
  }
  render() {
    return (
      <OwlCarousel id="home-carousel" options={options}>
        {this.state.carousels.map((item, i) => (
          <div key={i}>
            <img
              className="w-100"
              src={`/images/carousel/${item.image}`}
              alt={item.name}
            />
          </div>
        ))}
      </OwlCarousel>
    );
  }
}

export default Carousel;
