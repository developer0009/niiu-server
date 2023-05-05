import React, { Component } from "react";
import Footer from "../../Home/Footer";
import Header from "../../Home/Header";
import SEOSection from "../../Home/SEOSection";
import { Link } from "react-router-dom";
import SharePage from "../SharePage";

import "../../../css/Blogs/KnowYourAudience.css";

import startegicImg from "../../../images/strategic-creative-section.png";
import startegicImg2 from "../../../images/strategic-creative2.png";

import { Helmet } from "react-helmet";

import SaasAnalyticsOG from "../../../images/blogs/blog17.webp";
function StrategicCreative() {
  const mTitle = "Strategic Creative | Niiu Digital";
  const mDesc =
    "To be able to get the conversion more than engagement here's the guide for strategic creative, read it here.";
  return (
    <>
      <Helmet>
        <title>Strategic Creative | Niiu Digital</title>
        <meta
          name="description"
          content="To be able to get the conversion more than engagement here's the guide for strategic creative, read it here."
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
              <p className="subhead-p">Blogs {">"} Strategic Creative</p>
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
                  October 18, 2022
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
                <h2>Ad formats and placements</h2>
              </div>
              <p>
                You should choose an ad format based on your business goal and
                the types of high-quality assets available. There are six main
                ad formats:
              </p>
              <img
                src={startegicImg}
                className="img img-fluid"
                alt="Ad formats and placements"
              ></img>
              <div className="blog-sub-title">
                <h3>Single Image</h3>
              </div>
              <p>
                A single image ad can be used across most placements. It’s
                important to note that text on the actual image may keep your ad
                from delivering or may impact the performance if it does
                deliver. Keep the text in the description whenever possible.
              </p>
              <div className="blog-sub-title">
                <h3>Single Video</h3>
              </div>
              <p>
                When paired with the right targeting, optimization and
                call–to–action, you can prompt action from video, which makes it
                a strong medium for you ads. You can create video ads on
                Facebook using several ad objectives.
              </p>
              <div className="blog-sub-title">
                <h3>Carousel</h3>
              </div>
              <p>
                Carousel ads let you display multiple images or videos that
                scroll from left to right. This format is effective for
                storytelling and showcasing videos and images of your brand,
                products, apps or services. Carousel ads provide a flexible way
                to advertise your products, services, apps or promotions without
                having to create multiple ads.
              </p>
              <div className="blog-sub-title">
                <h3>Slideshow</h3>
              </div>
              <p>
                You can produce an ad using static images and it will play like
                a video. Slideshow ads are a lower in cost alternative to video
                production because they let you bring motion to static assets.
                You can combine multiple images (or videos), text and sound to
                capture attention and tell a story. Slideshow ads will play on
                Facebook and Instagram on phones, tablets and computers just
                like a video.
              </p>
              <div className="blog-sub-title">
                <h3>Collection</h3>
              </div>
              <p>
                Collection pairs a video or photo with four product images.
                Clicking on this ad leads people to a fullscreen, mobile-only
                experience showcasing multiple products, which loads within the
                Facebook app.
              </p>
              <div className="blog-sub-title">
                <h3>Instant Experience</h3>
              </div>
              <p>
                Instant Experience allows you to add a fullscreen experience to
                any ad format. Instant Experience is. An interstitial landing
                page that loads instantly when someone taps on an ad on Facebook
                or Instagram. Instant Experiences are native, so they load
                faster than an external website would.
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
                <h2>Formats and Placements for Campaign Objective</h2>
              </div>
              <p>
                The campaign objective you choose should align with your overall
                business goals. However, it's important to note that the
                campaign objective you choose also determines what placements
                and ad formats you can use.
              </p>
              <p>
                Here are the ad formats and placements available for each
                objective:
              </p>
              <img
                src={startegicImg2}
                className="img img-fluid"
                alt="Formats and placements for campaign objective"
              ></img>
            </div>
          </div>
          <div
            className="row blog-content"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="col-lg-12">
              <div className="blog-title">
                <h2>Dynamic Creative</h2>
              </div>
              <p>
                Dynamic creative finds optimized ad creative combinations by
                taking multiple ad components (such as images, videos, titles,
                descriptions and CTAs) and automatically generates combinations
                of these assets across audiences. The delivery system then
                optimizes for creative components that can deliver efficient
                results for each impression served.
              </p>
              <p>
                Dynamic creative ads will work to serve your audience the most
                high–performing creative combinations.
              </p>
              <p>
                Dynamic creative is ideal for advertisers with many assets who
                want to learn what creative resonates with different audiences.
                However, it's not a substitute for split testing. Dynamic
                creative provides multiple benefits. It saves time during ad
                creation, helps improve ad performance and encourages
                advertisers to try new creative.
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
                <h2>Creative best practices</h2>
              </div>
              <p>
                Having creative images with one focal point versus many in
                product and lifestyle contexts can impact lower funnel
                attributes such as purchase intent or attributed view content
                events positively. Similarly, using context type images with one
                focal point can impact brand awareness positively.
              </p>
              <p>
                Embrace video: Video prompts both brand and direct response
                outcomes. Today's video ads are interactive, shorter and mobile.
                You can prompt action from videos, when paired with the right
                targeting, optimization and call- to-action, which makes it a
                more functional medium for direct response than it has been in
                the past.
              </p>
              <p>
                Optimize video ads for mobile viewing: Based on how people view
                content on mobile, we recommend:
              </p>
              <p className="mb-1">
                - Creating short videos (15 seconds or less)
              </p>
              <p className="mb-1">- Capturing attention quickly</p>
              <p className="mb-1">- Incorporating the brand early</p>
              <p className="mb-1">- Designing for sound-off experiences</p>
              <p>- Building for vertical viewing</p>
              <p>
                Static images and video work better together. Direct response
                campaigns that combine video and static image ads have the
                highest conversion lift outcomes compared to static-only
                campaigns. This implies that the two formats may complement each
                other in messaging and/or attract different audiences.
              </p>
              <p>
                Optimization of creative can help improve results: Mobile
                advertisers can use information and insights to fuel marketing
                strategies. Testing of creative can help you optimize your
                campaign and can have a significant impact on performance.
                Optimization can also help to avoid creative fatigue. Creative
                fatigue happens when your ad performance suffers due to
                overexposure. If you're worried about your ad creative getting
                stale:
              </p>
              <p className="mb-1">1. Decreases in CTR as frequency increases</p>
              <p>2. Increases in CPA as frequency increases</p>
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
                <Link to="/blogs/know-your-audience/">
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
                <Link to="/blogs/intro-to-ppcm/">
                  <button className="our-next-button">
                    <span>Next</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <SharePage link="/blogs/strategic-creative/"></SharePage>
        </div>
      </div>
      <SEOSection></SEOSection>
      <Footer></Footer>
    </>
  );
}

export default StrategicCreative;
