import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/logo-dark.png";
// import logo from "../../images/niiu-digital-new-logo.png";
import logo from "../../images/niiu-digital-new-logo-2.png";
import "../../css/Home/Header.css";

function Header() {
  return (
    <>
      <header
        className="header"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "9999",
          background: "white",
          boxShadow:
            "0px 0px 10px 0px rgba(7, 0, 47, 0.2), 0px 0px 10px 0px rgba(7, 0, 47, 0.2)",
        }}
      >
        <div className="container-fluid bg-color">
          <div className="container">
            <div className="row header-row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={logo}
                        alt="Niiu digital logo"
                        className="img img-fluid"
                      ></img>
                    </Link>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse links"
                    id="navbarSupportedContent"
                    style={{ zIndex: "9999" }}
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active dropdown">
                        <div className="about_us_link">
                          <span
                            // to="/about-us"
                            className="about_us_link nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            About Us
                          </span>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                            style={{
                              border: "none",
                              boxShadow:
                                "0px 0px 10px 0px rgba(7, 0, 47, 0.2), 0px 0px 10px 0px rgba(7, 0, 47, 0.2)",
                            }}
                          >
                            <Link
                              to="/who-are-we/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Who Are We</span>
                            </Link>
                            <div className="dropdown-divider bg-white"></div>
                            <Link
                              to="/meet-our-team/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Meet Our Team</span>
                            </Link>
                            <div className="dropdown-divider bg-white"></div>
                            <Link
                              to="/faqs/"
                              className="about_us_link dropdown-item"
                            >
                              <span>FAQ's</span>
                            </Link>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <div className="web_services_link">
                          <span
                            // to="/web-services"
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Web Services
                          </span>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                            style={{
                              border: "none",
                              boxShadow:
                                "0px 0px 10px 0px rgba(7, 0, 47, 0.2), 0px 0px 10px 0px rgba(7, 0, 47, 0.2)",
                            }}
                          >
                            <Link
                              to="/website-development/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Website Design & Development</span>
                            </Link>
                            <div className="dropdown-divider bg-white"></div>
                            <Link
                              to="/content-marketing/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Content Marketing</span>
                            </Link>
                            <div className="dropdown-divider bg-white"></div>
                            <Link
                              to="/ui-ux-design/"
                              className="about_us_link dropdown-item"
                            >
                              <span>UI/UX Design</span>
                            </Link>
                            <div className="dropdown-divider bg-white"></div>
                            <Link
                              to="/search-engine-optimization/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Search Engine Optimization</span>
                            </Link>
                            <div className="dropdown-divider bg-white"></div>
                            <Link
                              to="/social-media-marketing/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Social Media Marketing</span>
                            </Link>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <div className="value_adding_services_link">
                          <span
                            // to="/about-us"
                            className="value-adding-services-link nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Value Adding Services
                          </span>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                            style={{
                              border: "none",
                              boxShadow:
                                "0px 0px 10px 0px rgba(7, 0, 47, 0.2), 0px 0px 10px 0px rgba(7, 0, 47, 0.2)",
                            }}
                          >
                            <Link
                              to="/business-management-software/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Business Management Software</span>
                            </Link>
                            <div className="dropdown-divider  bg-white"></div>
                            <Link
                              to="/ai-integrated-chat-bot/"
                              className="about_us_link dropdown-item"
                            >
                              <span>AI Integrated Chat-Bot</span>
                            </Link>
                            <div className="dropdown-divider  bg-white"></div>
                            <Link
                              to="/freelance-writing/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Freelance Writing</span>
                            </Link>
                            <div className="dropdown-divider  bg-white"></div>
                            <Link
                              to="/keyword-research/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Keyword Research</span>
                            </Link>
                            <div className="dropdown-divider  bg-white"></div>
                            <Link
                              to="/pay-per-click-management/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Pay-Per-Click Management</span>
                            </Link>
                            <div className="dropdown-divider  bg-white"></div>
                            <Link
                              to="/ideation-and-designing/"
                              className="about_us_link dropdown-item"
                            >
                              <span>Ideation & Designing</span>
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item ">
                        <Link
                          to="/blogs/"
                          className="nav-link d-flex align-content-center"
                        >
                          <span className="blogs-link">Blogs</span>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link
                          to="/careers/"
                          className="nav-link d-flex align-content-center"
                        >
                          <span className="blogs-link">Careers</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/contact-us/"
                          className="nav-link d-flex align-content-center"
                        >
                          <span className="blogs-link">Contact Us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
