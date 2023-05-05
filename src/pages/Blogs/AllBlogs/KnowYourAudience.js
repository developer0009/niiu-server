import React, { Component } from "react";
import Footer from "../../Home/Footer";
import Header from "../../Home/Header";
import SEOSection from "../../Home/SEOSection";
import { Link } from "react-router-dom";
import SharePage from "../SharePage";

import "../../../css/Blogs/KnowYourAudience.css";

import { Helmet } from "react-helmet";

import SaasAnalyticsOG from "../../../images/blogs/blog18.webp";
function KnowYourAudience() {
  const mTitle = "Know Your Audience | NiiU Digital";
  const mDesc =
    "Know your audience by following the right steps. Click here to apply your business marketing.";
  return (
    <>
      <Helmet>
        <title>Know Your Audience | NiiU Digital</title>
        <meta
          name="description"
          content="Know your audience by following the right steps. Click here to apply your business marketing."
        />
        <meta property="og:title" content={mTitle} />
        <meta property="og:description" content={mDesc} />
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
              <p className="subhead-p">Blogs {">"} Know Your Audience</p>
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
                  <i className="fas fa-user me-2"></i>Yukta Mutreja
                </p>
              </div>

              <div
                className="date"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <p>
                  <i className="fas fa-calendar me-2"></i>
                  October 26, 2022
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
                <h2>Core Audiences</h2>
              </div>
              <p>
                With the Core Audience option, information is pulled from what
                people share in their profiles and the behaviours they exhibit
                on our platform. By identifying your Core Audience you can help
                more accurately market your campaign to the right people. For
                example, you can direct your ads to moms who are interested in
                sports, live in a big city and are environmentally conscious.
                Detailed targeting is a targeting option available in the
                audience section of Ads Manager that allows you to refine the
                group of people we show your ads to. You can do this with
                information such as additional demographics, interests and
                behaviors.
              </p>
              <p>These detailed targeting options may be based on:</p>
              <p className="mb-1">- Ads they tap or click</p>
              <p className="mb-1">- Pages they engage with</p>
              <p className="mb-1">
                - Activities people engage in on Facebook related to things like
                their device usage, and travel preferences
              </p>
              <p className="mb-1">
                - Demographics like age, gender and location
              </p>
              <p className="mb-1">
                - The type of device they use and the speed of their network
                connection
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
                <h2>Custom Audiences</h2>
              </div>
              <p>
                With the Custom Audience option advertisers reach people across
                devices based on the information they already have access to in
                a privacy-safe way. You can generate Custom Audiences by using
                your sources or using Facebook sources.
              </p>
              <p>
                To use your customer files or offline activity information to
                generate Custom Audiences, upload a list of CRM information
                (email addresses or phone numbers) into your browser. Your
                browser hashes all of the uploaded information locally on your
                computer. Then, we compare your list to our information. For
                each matching hash, we add the Facebook user to a Custom
                Audience stored within your ad account.
              </p>
              <p>
                Once the matching process completes, we delete all of the
                hashes, both matching and non-matching. The result is a Custom
                Audience of accounts that can potentially receive your ads. The
                Custom Audiences is stored in your ad account—only authorized
                account admins can deliver campaigns to it. You can't see the
                specific individuals who are contained in the Custom Audiences,
                you just see the approximate number of people that this audience
                contains.
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
                <h2>Generate Custom Audiences with Pixel</h2>
              </div>
              <p>
                Custom Audiences from your website is a targeting option that
                matches people who visit your website with people on Facebook,
                using the Facebook pixel. You can then create an ad to show to
                that audience.
              </p>
              <p>
                You can create a Custom Audience from your website for any group
                of visitors that you'd like to reach with targeted Facebook ads.
                For example, you can run a campaign to reach people who visited
                a product page but didn't complete a purchase to encourage them
                to go back to the website to do so. Or, you can create an
                audience of everyone who's visited your website in the past 30
                days. (This timeframe is based on a rolling number of days,
                rather than on the specific number of days since the Custom
                Audience creation date). You can create a Custom Audience, from
                your website events in Ads Manager.
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
                <h2>Generate Custom Audiences with SDK</h2>
              </div>
              <p>
                Creating a Custom Audience is a great way to target ads toward
                specific groups of people who are most likely to take the action
                you want them to take on your app.
              </p>
              <p>
                Using the Facebook SDK, you can pass information to Facebook
                from your app and use that information to specify who you want
                to include in your Custom Audience. For example, if you use the
                Traffic or Conversion objective to run an app ad engagement
                campaign, your ads may perform better if you create a Custom
                Audience of the people who have already installed your app. The
                ads will be targeted toward people who already have the app
                downloaded but who don't engage with it as much as you’d like.
                You can create a Custom Audience, from your app events, in Ads
                Manager.
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
                <Link to="/blogs/digital-marketing-strategy/">
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
                <Link to="/blogs/strategic-creative/">
                  <button className="our-next-button">
                    <span>Next</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <SharePage link="/blogs/know-your-audience/"></SharePage>
        </div>
      </div>
      <SEOSection></SEOSection>
      <Footer></Footer>
    </>
  );
}

export default KnowYourAudience;
