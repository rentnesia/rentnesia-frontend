import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <div className="swap-black" />
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <h2>
                  <span style={{ fontWeight: "300" }}>MORE</span> INFORMATION{" "}
                  <span style={{ fontWeight: "300" }}>?</span>
                </h2>
              </div>
              <div className="col-3">
                <h6>RENTNESIA</h6>
                <ul>
                  <li>About Us</li>
                  <li>Investor</li>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>Our Benefits</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div className="col-3">
                <Link to="/#home-carousel">
                  <div className="logo-white" />
                </Link>
                <div className="mt-10px">
                  <small className="d-block">
                    Customer Services: (021) 7192 1232
                  </small>
                  <small className="d-block">Email: info@rentnesia.com</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end-footer">
          <div className="row">
            <div className="col-12">
              <small className="d-block">
                Copyright &copy; <b>INDONESIA CREATIVE</b> 2019
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
