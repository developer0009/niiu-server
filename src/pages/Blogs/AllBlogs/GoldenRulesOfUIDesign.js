import React, { Component } from "react";
import Footer from "../../Home/Footer";
import Header from "../../Home/Header";
import SEOSection from "../../Home/SEOSection";
import { Link } from "react-router-dom";

import "../../../css/Blogs/KnowYourAudience.css";

import { Helmet } from "react-helmet";
import SharePage from "../SharePage";

import SaasAnalyticsOG from "../../../images/blogs/blog3.webp";
function GoldenRulesOfDesign() {
  return (
    <>
      <Helmet>
        <title>3 Golden Rules of UI Design | NiiU Digital</title>
        <meta
          name="description"
          content="Read the 3 golden rules of UI design for your business. This is important to apply for your website to acquire traffic and conversion."
        />

        <meta
          property="og:title"
          content=" 3 Golden Rules of UI Design | NiiU Digital"
        />
        <meta
          property="og:description"
          content="Read the 3 golden rules of UI design for your business. This is important to apply for your website to acquire traffic and conversion."
        />
        {/* <meta property="og:image" content="url_image" /> */}
        <meta property="og:image" content={SaasAnalyticsOG} />
      </Helmet>
      <Header></Header>
      <div className="container-fluid who-are-we-bg">
        <div
          className="container who-are-we padding-y"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="row">
            <div className="col-lg-12 content">
              <h1>Our Latest Blogs</h1>
              <p className="subhead-p">
                Blogs {">"} 3 Golden Rules of UI Design
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container individual-blog-section padding-y">
          <div className="row author-details">
            <div
              className="col-lg-12"
              style={{
                display: "flex",
              }}
            >
              <div
                className="name me-4"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p>
                  <i className="fas fa-user me-2"></i>Shrishti Shukla
                </p>
              </div>

              <div
                className="date"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p>
                  <i className="fas fa-calendar me-2"></i>
                  August 6, 2022
                </p>
              </div>
            </div>
          </div>

          <div
            className="row blog-content"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="col-lg-12">
              <div className="blog-title">
                <h2>#</h2>
              </div>
              <p>
                Implementation of User Interface (UI) Design turns a basic
                interface into a pleasing one by using typography, images, and
                other visual designing elements. Using UI Design on your website
                makes it more digestible and engaging. The main motive of a
                successful UI is to have a better interaction with the user, it
                helps in raising your website's conversion rate. You can
                understand the importance of a successful and interactive user
                interface by the fact that earlier, around 2014 or 2016, Windows
                used to have a high processing speed because of fewer graphics,
                and today speed has decreased because of the increase in the use
                of graphics, which has eventually increased the usage of
                Windows.
              </p>
            </div>
          </div>

          <div
            className="row blog-content"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="col-lg-12">
              <div className="blog-title">
                <h2>
                  The Above Analysis Displays The Significant Role Of UI Designs
                  In The Lives Of People Around The Globe.
                </h2>
              </div>
              <div className="blog-sub-title">
                <h3>Rule No.1 Intuitive Design</h3>
              </div>
              <p>
                Intuitive UI Design is the one that is easy to learn and
                engaging for the users. - Make the user interface of your
                website consistent. Try to use similar design patterns,
                homogenous menus and screens, identical terminology in prompts,
                and consistent commands throughout the interface. - Make use of
                the internal links on your website, this will allow the users to
                navigate easily throughout the website.
              </p>
              <div className="blog-sub-title">
                <h3>Rule No.2 Audience Retention</h3>
              </div>
              <p>
                Retaining the attention of the users onto your website needs an
                effective implementation of UI designs. - For example, using
                bright colors will distract users from your website by stressing
                on their eyes, while the warm colors will provide relief and a
                sense of calmness to their eyes, which will eventually make the
                user spend a long time on your website. - Retention of users
                will provide valuable feedback to your business and its
                services.
              </p>
              <div className="blog-sub-title">
                <h3>Rule No.3 User Engagement</h3>
              </div>
              <p>
                More the graphics, more will be an ease for the users to use
                your website. - Graphics include the icons, buttons, images,
                videos, and pull-up and pop-up screen menus. - Try to provide
                informative feedback to the users. For example, while entering
                the password, offer pieces of information like how to create a
                strong password, what is the strength of the password entered by
                the user, etc. - Provide the facility in which the user can
                reverse his or her actions easily, without losing all the data
                and starting it all over again.
              </p>
            </div>
          </div>

          <div className="row prev-next-btn blog-content">
            <div
              className="col-lg-12"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="prev-btn"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Link to="/blogs/5-ways-to-up-your-seo-game/">
                  <button className="our-previous-button">
                    <span>Previous</span>
                  </button>
                </Link>
              </div>
              <div
                className="next-btn"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Link to="/blogs/why-every-business-needs-a-webiste/">
                  <button className="our-next-button">
                    <span>Next</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <SharePage link="/blogs/3-golden-rules-of-ui-design/"></SharePage>
        </div>
      </div>
      <SEOSection></SEOSection>
      <Footer></Footer>
    </>
  );
}

export default GoldenRulesOfDesign;
