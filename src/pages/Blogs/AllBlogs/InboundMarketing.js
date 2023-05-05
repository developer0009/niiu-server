import React, { Component } from "react";
import Footer from "../../Home/Footer";
import Header from "../../Home/Header";
import SEOSection from "../../Home/SEOSection";
import { Link } from "react-router-dom";

import "../../../css/Blogs/KnowYourAudience.css";

import cycleImg from "../../../images/three-part-cycle.jpg";
import inboundVsOutbound from "../../../images/inbound-vs-outbound-marketing.jpg";
import benefitsInbound from "../../../images/benefits-inbound-marketing.jpg";

import { Helmet } from "react-helmet";
import SharePage from "../SharePage";

import SaasAnalyticsOG from "../../../images/blogs/blog14.webp";
function InboundMarketing() {
  const mTitle = "What is Inbound Marketing | Niiu Digital";
  const mDesc =
    "Inbound marketing is an important strategy to attract customers, know more by reading here to help your business get the right traffic you are hitting on.";
  return (
    <>
      <Helmet>
        <title>What is Inbound Marketing | Niiu Digital</title>
        <meta
          name="description"
          content="Inbound marketing is an important strategy to attract customers, know more by reading here to help your business get the right traffic you are hitting on."
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
              <p className="subhead-p">
                Blogs {">"} What is Inbound Marketing ?
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
                  October 1, 2022
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
                Inbound marketing is a powerful marketing strategy that uses
                digital channels to attract and engage customers. It's based on
                the principle that customers are seeking out information, so
                your company must provide it in a way that's relevant and useful
                to them. By using the right digital channels, inbound marketing
                can help your business reach new potential customers, increase
                leads and sales, and create a more engaged customer base.
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
                <h2>Three-Part Cycle of Inbound Marketing</h2>
              </div>
              <img
                src={cycleImg}
                className="img img-fluid mb-4"
                style={{ width: "600px" }}
                alt="Three-part cycle of inbound marketing"
              ></img>
              <div className="blog-sub-title">
                <h3>Attracting</h3>
              </div>
              <p>
                This step of Inbound Marketing is mainly focused on content. You
                have to produce and share blog articles, videos, tutorials,
                infographics or anything that is valuable and makes sense for
                your future clients.
              </p>
              <div className="blog-sub-title">
                <h3>Engaging</h3>
              </div>
              <p>
                The “Engage” part of the Inbound strategy is focused on
                generating leads, potential customers who have already
                interacted with some of the brand’s content. Here is where
                social media really shines, along with email automation and more
                direct communication with the audience. The main goal is to
                provide great customer service, show your best selling points
                and present real value for the consumer.
              </p>

              <div className="blog-sub-title">
                <h3>Delight</h3>
              </div>
              <p>
                To delight a customer, you have to pay attention to one
                important keyword: experience. The act of buying, the delivery
                of the product/service and the support post-purchase are all
                crucial for an Inbound strategy. As we said before, part of your
                success will be measured by how many of your converted clients
                recommend and promote your brand. So the purchasing process
                itself should also be selling your brand. Delighted customers
                become loyal and influencers within their social circles.
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
                <h2>Inbound Marketing vs Outbound Marketing</h2>
              </div>
              <img
                src={inboundVsOutbound}
                className="img img-fluid mb-4"
                style={{ width: "600px" }}
                alt="Inbound marketing vs outbound marketing"
              ></img>
              <p>
                The name holds the key to understanding the distinctions between
                inbound and outgoing marketing. Inbound marketing is about
                attracting prospective clients in, whereas outbound marketing is
                about outwardly pushing a company's product. Inbound marketing
                refers to gaining attention, whereas outbound refers to
                purchasing it.
              </p>
              <div className="blog-sub-title">
                <h3>Inbound marketing: owned and earned media</h3>
              </div>
              <p>
                Inbound marketing uses owned and earned media to engage
                potential customers in creative ways.
              </p>
              <p className="mb-1">
                - Owned media are those channels that a business has control
                over. For example, your website, blog, brand social media
                profiles, product landing pages and YouTube channel. You choose
                what to publish, how to publish it, and when.
              </p>
              <p className="mb-4">
                - Earned media is the coverage you earn as a result your hard
                work. Offline, this includes traditional coverage in newspapers
                and magazines. Online, it includes coverage on news sites often
                gained through digital PR, but also mentions on social media,
                use of a campaign hashtag, conversations in online forums, and
                online reviews. You have less control over earned media, but it
                should be a reward for the work you’ve put into your inbound
                marketing campaign.
              </p>
              <p>Outbound marketing: paid media</p>
              <p className="mb-1">
                - Outbound marketing, on the other hand, is more commonly
                associated with paid media. Traditional offline advertising, pay
                per click (PPC), and display advertising are all examples of
                paid email.
              </p>
              <p className="mb-1">
                - Social media advertising, such as Facebook advertising or
                boosted Twitter posts, is also included in paid media. While
                social media advertising is often effective for improving the
                performance of inbound marketing campaigns, it should be noted
                that it isn't always associated with outbound marketing.
              </p>
              <p>
                - For example, you may promote your material and campaign to
                your specific audience on Facebook without restriction.
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
                <h2>Benefits of Inbound Marketing</h2>
              </div>
              <img
                src={benefitsInbound}
                className="img img-fluid mb-4"
                style={{ width: "600px" }}
                alt="Benefits of inbound marketing"
              ></img>
              <div className="blog-sub-title">
                <h3>Cost-effective</h3>
              </div>
              <p>
                Lead-to-lead inbound marketing costs 62 percent less than
                outbound marketing and, at the same time, is more effective.
                This is because instead of blindly distributing what you have to
                offer in places where your target audience might be, you’re
                strategically creating extraordinary content that brings the
                audience to you.
              </p>
              <p>
                Another reason inbound is a much more cost-effective approach is
                because it delivers the data you need to learn from your efforts
                and continuously optimize. This allows you to know more about
                your potential customers and thus serve them better.
              </p>
              <p>
                Inbound marketing practices produce 54% more leads than
                traditional outbound practices. (Invespcro)
              </p>
              <p>
                Inbound marketing is about focusing efforts on attracting people
                who are looking for something that you offer, because spending
                marketing resources on people who don't want or don't need your
                products is useless and absurd.
              </p>
              <p>
                If you’re a business owner, on a marketing team, or just curious
                about how to grow your business—inbound marketing is the best
                ROI when it comes to spending your marketing budget.
              </p>
              <div className="blog-sub-title">
                <h3>Improves Customer Relationship</h3>
              </div>
              <p>
                Inbound marketing is essentially about providing useful,
                valuable content to your target audience. At the core of every
                inbound strategy is the art of seeking to truly know your
                customers better in order to provide them with even more value.
                This is best accomplished through careful monitoring that helps
                you solve their problems and answer their questions. The more
                value you bring to your customers, the closer your relationship
                grows.
              </p>
              <p>
                Ninety percent of consumers believe that personalized content is
                useful, and 78 percent believe that a company that cares about
                providing such content is interested in building a good
                relationship with them.
              </p>
              <div className="blog-sub-title">
                <h3>Higher brand awareness</h3>
              </div>
              <p>
                Most of the time, being the first brand to pop up on someone’s
                mind is enough to win the competition. Even when they are not
                yet ready to become a lead, being present means being
                remembered.
              </p>
              <p>
                Creating effective content isn’t all that hard (if you know what
                you’re doing) and it is so incredibly valuable to your
                positioning as a company. Having the proper content in place is
                not only the easiest and most popular way for people to learn
                about your business, but it establishes your brand as a thought
                leader.
              </p>
              <p>
                Having the right inbound marketing strategy for your company
                regardless of industry, from Legal, B2B, SaaS, Entertainment, to
                E-Commerce, is necessary. It is also imperative that it includes
                a solid content marketing agenda to set your brand up as a
                thought leader in your industry.
              </p>
              <p>
                Your brand reputation on the internet is timeless. It never
                disappears and it isn’t baseless. The better your strategies are
                today, the better positioned you are now and will be in the
                future. As we continue into a new decade in this digital age,
                it’s important to consider who your customers will be moving
                forward. Millennials and Gen Z will soon make up the majority of
                your target audience. These generations are deeply involved in
                technology.
              </p>
              <p>
                You are clearly falling behind if you have not yet optimized
                your marketing programs to attract these consumers. It's time to
                modernize your inbound marketing efforts. To assist you start
                with a plan that will work best for your business, we suggest{" "}
                <Link
                  to="/contact-us/"
                  style={{
                    fontWeight: "bold",
                    color: "#2b0a78",
                  }}
                >
                  partnering with an knowledgeable and experienced inbound
                  marketing agency!
                </Link>{" "}
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
                <Link to="/blogs/latest-ui-ux-trends/">
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
                <Link to="/blogs/get-started-with-affiliate-marketing/">
                  <button className="our-next-button">
                    <span>Next</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <SharePage link="/blogs/what-is-inbound-marketing/"></SharePage>
        </div>
      </div>
      <SEOSection></SEOSection>
      <Footer></Footer>
    </>
  );
}

export default InboundMarketing;
