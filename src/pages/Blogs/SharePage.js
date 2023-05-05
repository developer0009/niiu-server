import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/Blogs/SharePage.css";
import { BlogContext } from "../../context_api/index";
import { useContext } from "react";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const SharePage = (props) => {
  const posts = useContext(BlogContext);
  const collectionOfBlogs = [
    {
      title: "Reasons you Should Consider using TikTok for Marketing",
      link: "/blogs/reasons-tiktok-marketing/",
    },
    {
      title:
        "Why You Should Consider Hiring a Freelance Writer to Help with Your Writing Projects",
      link: "/blogs/why-you-should-hire-freelance-writer/",
    },
    {
      title: "Factors to Consider while Choosing a Digital Marketing Agency",
      link: "/blogs/factors-digital-marketing/",
    },
    {
      title: "Digital Marketing is Essential For SMEs and Solopreneurs",
      link: "/blogs/digital-marketing-essential-smes-solopreneurs/",
    },
    {
      title: "5 Main Expertise Offered by Digital Marketing Agencies",
      link: "/blogs/5-main-expertise-digital-marketing/",
    },
    {
      title:
        "Ideation: Why it's Crucial for Your Successful Marketing Strategy",
      link: "/blogs/ideation-for-marketing/",
    },
    {
      title: "The Ultimate guide to Google Analytics",
      link: "/blogs/guide-to-google-analytics/",
    },
    {
      title: "The Importance of keyword Research in Digital Marketing",
      link: "/blogs/importance-of-keyword-research/",
    },
    {
      title: "Common Social Media Marketing mistakes You Probably Already Make",
      link: "/blogs/social-media-mistakes/",
    },
    {
      title:
        "How To Create A Survey That Drives More qualified Inquiries and Boosts Your Lead Generation",
      link: "/blogs/create-a-survey/",
    },
    {
      title: "Advantages of Business Chatbot Automation",
      link: "/blogs/business-chatbot-automation/",
    },
    {
      title: "Digital Marketing Strategy",
      link: "/blogs/digital-marketing-strategy/",
    },
    {
      title: "Benefits of Organic Search to Your Business",
      link: "/blogs/benefits-of-organic-search-to-your-business/",
    },
    {
      title: "Know your audience",
      link: "/blogs/know-your-audience/",
    },
    {
      title: "Strategic creative",
      link: "/blogs/strategic-creative/",
    },
    {
      title: "Introduction to pay per click management",
      link: "/blogs/intro-to-ppcm/",
    },
    {
      title: "Latest UI UX trends",
      link: "/blogs/latest-ui-ux-trends/",
    },
    {
      title: "What is Inbound Marketing?",
      link: "/blogs/what-is-inbound-marketing/",
    },
    {
      title: "Get started with Affiliate Marketing",
      link: "/blogs/get-started-with-affiliate-marketing/",
    },
    {
      title: "How is your UI/UX impacting customer interaction?",
      link: "/blogs/how-is-your-ui-ux-impacting-customer-interaction/",
    },
    {
      title: "Effective Branding Tips",
      link: "/blogs/effective-branding-tips/",
    },
    {
      title: "Guide to Facebook Marketing",
      link: "/blogs/guide-to-facebook-marketing/",
    },
    {
      title: "7 Skills Every Digital Marketer Needs To Succeed!",
      link: "/blogs/7-skills-every-digital-marketer-needs-to-be-succeed/",
    },
    {
      title: "Effective Use Of Hashtags",
      link: "/blogs/effective-use-of-hashtags/",
    },
    {
      title: "All you need to know about Business Blogging!",
      link: "/blogs/all-you-need-to-know-about-business-blogging/",
    },
    {
      title: "Overview: Content Marketing & How it can help your business?",
      link: "/blogs/content-marketing-how-it-can-help-your-business/",
    },
    {
      title:
        "How to Get Traffic and Customers Online: The Basics of Digital Marketing",
      link: "/blogs/how-to-get-traffic-and-customers-online/",
    },
    {
      title: "5 Ways To Up Your SEO Game!",
      link: "/blogs/5-ways-to-up-your-seo-game/",
    },
    {
      title: "3 Golden Rules of UI Design",
      link: "/blogs/3-golden-rules-of-ui-design/",
    },
    {
      title: "Why Every Business Needs A Website?",
      link: "/blogs/why-every-business-needs-a-webiste/",
    },
    {
      title:
        "How can the SaaS Analytics platform helps in Marketing and growth",
      link: "/blogs/how-can-the-saas-analytics-platform-helps-in-marketing-and-growth/",
    },
    ...posts.map(({ title, slug }) => {
      return { title, link: `/blogs/${slug.current}/` };
    }),
  ];

  const eliminatedBlog = collectionOfBlogs.find(
    (item) => item.link === props.link
  );

  const filteredBlogs = collectionOfBlogs.filter(
    (item) => item.link !== eliminatedBlog.link
  );

  let item1;
  let item2;
  let item3;
  let data;
  function items() {
    item1 = filteredBlogs[Math.floor(Math.random() * filteredBlogs.length)];

    const againEiminatedBlog = filteredBlogs.find(
      (item) => item.link === item1.link
    );

    const againFilteredBlogs = filteredBlogs.filter(
      (item) => item.link !== againEiminatedBlog.link
    );

    item2 =
      againFilteredBlogs[Math.floor(Math.random() * againFilteredBlogs.length)];

    const onceAgainEiminatedBlog = againFilteredBlogs.find(
      (item) => item.link === item2.link
    );

    const onceAgainFilteredBlogs = againFilteredBlogs.filter(
      (item) => item.link !== onceAgainEiminatedBlog.link
    );

    item3 =
      onceAgainFilteredBlogs[
        Math.floor(Math.random() * onceAgainFilteredBlogs.length)
      ];

    data = (
      <ul className="mb-0">
        <li>
          <Link to={item1.link}>{item1.title}</Link>
        </li>
        <li>
          <Link to={item2.link}>{item2.title}</Link>
        </li>
        <li className="mb-0">
          <Link to={item3.link}>{item3.title}</Link>
        </li>
      </ul>
    );

    return data;
  }
  return (
    <>
      <div className="row padding-t">
        <div className="col-lg-12 blog-content">
          <div className="blog-title">
            <h2 style={{ fontSize: "20px", fontWeight: "bolder" }}>
              Additional Reading:
            </h2>
          </div>
          <div className="additional-reading">{items()}</div>
        </div>
      </div>
      <div className="row padding-y">
        <div className="col-lg-12 text-center">
          <div className="blog-title share-icons-title">
            <h2
              className="d-flex justify-content-center align-items-center"
              style={{ gap: "5px" }}
            >
              Share this blog<i className="fas fa-share-alt"></i>
            </h2>
          </div>
          <div className="share-icons-div">
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={40} round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton url={window.location.href}>
              <WhatsappIcon size={40} round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <FacebookMessengerShareButton url={window.location.href}>
              <FacebookMessengerIcon
                size={40}
                round={true}
              ></FacebookMessengerIcon>
            </FacebookMessengerShareButton>
            <EmailShareButton url={window.location.href}>
              <EmailIcon size={40} round={true}></EmailIcon>
            </EmailShareButton>
            <TelegramShareButton url={window.location.href}>
              <TelegramIcon size={40} round={true}></TelegramIcon>
            </TelegramShareButton>
            <TwitterShareButton url={window.location.href}>
              <TwitterIcon size={40} round={true}></TwitterIcon>
            </TwitterShareButton>
            <LinkedinShareButton url={window.location.href}>
              <LinkedinIcon size={40} round={true}></LinkedinIcon>
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharePage;
