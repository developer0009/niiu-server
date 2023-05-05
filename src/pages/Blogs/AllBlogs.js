import React, { Component } from "react";

import blog100 from "../../images/blogs/blog100.webp";
import blog101 from "../../images/blogs/blog101.webp";
import blog102 from "../../images/blogs/blog102.webp";
import blog103 from "../../images/blogs/blog103.webp";
import blog104 from "../../images/blogs/blog104.webp";
import blog105 from "../../images/blogs/blog105.webp";
import blog106 from "../../images/blogs/blog106.webp";
import blog107 from "../../images/blogs/blog107.webp";
import blog108 from "../../images/blogs/blog108.webp";
import blog109 from "../../images/blogs/blog109.webp";
import blog110 from "../../images/blogs/blog110.webp";
import blog111 from "../../images/blogs/blog111.webp";

import blog19 from "../../images/blogs/blog19.webp";
import blog18 from "../../images/blogs/blog18.webp";
import blog17 from "../../images/blogs/blog17.webp";
import blog16 from "../../images/blogs/blog16.webp";
import blog15 from "../../images/blogs/blog15.webp";
import blog14 from "../../images/blogs/blog14.webp";
import blog13 from "../../images/blogs/blog13.webp";
import blog12 from "../../images/blogs/blog12.webp";
import blog11 from "../../images/blogs/blog11.webp";
import blog10 from "../../images/blogs/blog10.webp";
import blog9 from "../../images/blogs/blog9.webp";
import blog8 from "../../images/blogs/blog8.webp";
import blog7 from "../../images/blogs/blog7.webp";
import blog6 from "../../images/blogs/blog6.webp";
import blog5 from "../../images/blogs/blog5.webp";
import blog4 from "../../images/blogs/blog4.webp";
import blog3 from "../../images/blogs/blog3.webp";
import blog2 from "../../images/blogs/blog2.webp";
import blog1 from "../../images/blogs/blog1.webp";

import Blog from "./Blog";
import FetchBlog from "../../sanity/FetchBlog";
const srishti = "Shrishti Shukla";
const jason = "Jason Wong";
const yukta = "Yukta Mutreja";
const elizabeth = "Elizabeth Assey";

const AllBlogs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container simple-steps-section all-blogs-section padding-y">
          <div className="row who-are-we text-center mb-3">
            <div
              className="col-md-12"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h2>We publish a blog every week !</h2>
            </div>
          </div>
          <div className="row cards-section">
            <div className="col-lg-12">
              <div className="wrapper">
                <Blog
                  imgName={blog111}
                  author={elizabeth}
                  date="16 Jan, 2023"
                  title="Reasons you Should Consider using TikTok..."
                  text="With over 2 billion active users, TikTok is without..."
                  link="/blogs/reasons-tiktok-marketing/"
                  alt="Reasons you Should Consider using TikTok for Marketing"
                ></Blog>
                <Blog
                  imgName={blog104}
                  author={elizabeth}
                  date="8 Jan, 2023"
                  title="Why You Should Consider Hiring a Freelance Writer..."
                  text="Freelancing is a career of a professional writer..."
                  link="/blogs/why-you-should-hire-freelance-writer/"
                  alt="Why You Should Consider Hiring a Freelance Writer to Help with Your Writing Projects"
                ></Blog>
                <Blog
                  imgName={blog105}
                  author={elizabeth}
                  date="5 Jan, 2023"
                  title="Factors to Consider while Choosing a Digital..."
                  text="Choosing a digital marketing agency can be incredibly..."
                  link="/blogs/factors-digital-marketing/"
                  alt="Factors to Consider while Choosing a Digital Marketing Agency"
                ></Blog>
                <Blog
                  imgName={blog106}
                  author={elizabeth}
                  date="30 Dec, 2022"
                  title="Digital Marketing is Essential For SMEs and Solopreneurs"
                  text="SMEs and Solopreneurs are businesses that operate without..."
                  link="/blogs/digital-marketing-essential-smes-solopreneurs/"
                  alt="Digital Marketing is Essential For SMEs and Solopreneurs"
                ></Blog>
                <Blog
                  imgName={blog107}
                  author={elizabeth}
                  date="23 Dec, 2022"
                  title="5 Main Expertise Offered by Digital Marketing Agencies"
                  text="A digital marketing agency is a business that specializes..."
                  link="/blogs/5-main-expertise-digital-marketing/"
                  alt="5 Main Expertise Offered by Digital Marketing Agencies"
                ></Blog>
                <Blog
                  imgName={blog108}
                  author={elizabeth}
                  date="11 Dec, 2022"
                  title="Ideation: Why it's Crucial for Successful Marketing..."
                  text="Ideation is the process of generating new ideas..."
                  link="/blogs/ideation-for-marketing/"
                  alt="Ideation: Why it's Crucial for Your Successful Marketing Strategy"
                ></Blog>
                <Blog
                  imgName={blog109}
                  author={elizabeth}
                  date="7 Dec, 2022"
                  title="The Ultimate guide to Google Analytics"
                  text="Google analytics is a powerful tool that can help..."
                  link="/blogs/guide-to-google-analytics/"
                  alt="The Ultimate guide to Google Analytics"
                ></Blog>
                <Blog
                  imgName={blog110}
                  author={elizabeth}
                  date="28 Nov, 2022"
                  title="The Importance of keyword Research in Digital..."
                  text="The process of discovering the keywords used by..."
                  link="/blogs/importance-of-keyword-research/"
                  alt="The Importance of keyword Research in Digital Marketing"
                ></Blog>
                <Blog
                  imgName={blog103}
                  author={elizabeth}
                  date="23 Nov, 2022"
                  title="Common Social Media Marketing mistakes..."
                  text="There is no question that social media has become..."
                  link="/blogs/social-media-mistakes/"
                  alt="Common Social Media Marketing mistakes You Probably Already Make"
                ></Blog>
                <Blog
                  imgName={blog102}
                  author={elizabeth}
                  date="17 Nov, 2022"
                  title="How To Create A Survey That Drives More enquiries..."
                  text="Surveys are an excellent way to gather information..."
                  link="/blogs/create-a-survey/"
                  alt="How To Create A Survey That Drives More qualified Inquiries and Boosts Your Lead Generation"
                ></Blog>
                <Blog
                  imgName={blog101}
                  author={elizabeth}
                  date="11 Nov, 2022"
                  title="Advantages of Business Chatbot Automation"
                  text="Customer service is a vital component of a business..."
                  link="/blogs/business-chatbot-automation/"
                  alt="Advantages of Business Chatbot Automation"
                ></Blog>
                <Blog
                  imgName={blog19}
                  author={elizabeth}
                  date="5 Nov, 2022"
                  title="Digital Marketing Strategy"
                  text="Digital marketing strategy is the plan that a business uses..."
                  link="/blogs/digital-marketing-strategy/"
                  alt="Digital Marketing Strategy"
                ></Blog>
                <Blog
                  imgName={blog100}
                  author={elizabeth}
                  date="30 Oct, 2022"
                  title="Benefits of Organic Search to Your Business"
                  text="Digital marketing has now become an essential part of any..."
                  link="/blogs/benefits-of-organic-search-to-your-business/"
                  alt="Benefits of Organic Search to Your Business"
                ></Blog>

                <Blog
                  imgName={blog18}
                  author={yukta}
                  date="26 Oct, 2022"
                  title="Know your audience"
                  text="With the Core Audience option, information is pulled from..."
                  link="/blogs/know-your-audience/"
                  alt="Know your audience"
                ></Blog>
                <Blog
                  imgName={blog17}
                  author={yukta}
                  date="18 Oct, 2022"
                  title="Strategic Creative"
                  text="Dynamic creative finds optimized ad creative combinations..."
                  link="/blogs/strategic-creative/"
                  alt="Strategic creative"
                ></Blog>
                <Blog
                  imgName={blog16}
                  author={yukta}
                  date="13 Oct, 2022"
                  title="Introduction to Pay-Per-Click Management"
                  text="PPC management is the process of managing a company’s..."
                  link="/blogs/intro-to-ppcm/"
                  alt="Introduction to pay per click management"
                ></Blog>
                <Blog
                  imgName={blog15}
                  author={yukta}
                  date="7 Oct, 2022"
                  title="Latest UI/UX Trends"
                  text="Forget the UI that only happens on-screen. Now you must..."
                  link="/blogs/latest-ui-ux-trends/"
                  alt="Latest UI UX trends"
                ></Blog>
                <Blog
                  imgName={blog14}
                  link="/blogs/what-is-inbound-marketing/"
                  title="What is Inbound Marketing?"
                  text="Inbound marketing is a powerful marketing strategy that..."
                  alt="Inbound marketing"
                  author={yukta}
                  date="1 Oct, 2022"
                ></Blog>
                <Blog
                  imgName={blog13}
                  link="/blogs/get-started-with-affiliate-marketing/"
                  alt="Affiliate marketing"
                  text="Affiliate marketing involves earning a commission by..."
                  author={yukta}
                  date="27 Sept, 2022"
                  title="Get started with Affiliate Marketing"
                ></Blog>
                <Blog
                  imgName={blog12}
                  link="/blogs/how-is-your-ui-ux-impacting-customer-interaction/"
                  text="User Interface/User Experience, commonly abbreviated..."
                  alt=" UI UX impacting customer interaction"
                  author={yukta}
                  date="22 Sept, 2022"
                  title="How is your UI/UX impacting customer interaction?"
                ></Blog>
                <Blog
                  imgName={blog11}
                  link="/blogs/effective-branding-tips/"
                  text="Branding is one of the most effective ways to make a good..."
                  alt="Effective branding tips"
                  author={yukta}
                  date="16 Sept, 2022"
                  title="Effective Branding Tips"
                ></Blog>
                <Blog
                  imgName={blog10}
                  link="/blogs/guide-to-facebook-marketing/"
                  alt="Guide to facebook marketing"
                  author={yukta}
                  date="9 Sept, 2022"
                  title="Guide to Facebook Marketing"
                  text="Facebook is an indispensable platform for companies to meet..."
                ></Blog>
                <Blog
                  imgName={blog9}
                  link="/blogs/7-skills-every-digital-marketer-needs-to-be-succeed/"
                  alt="7 Skills every digital marketer needs to be succeed"
                  author={yukta}
                  date="3 Sept, 2022"
                  title="7 Skills Every Digital Marketer Needs To Succeed!"
                  text="Digital marketing is all about numbers. It's about digital..."
                ></Blog>
                <Blog
                  imgName={blog8}
                  link="/blogs/effective-use-of-hashtags/"
                  alt="Effective use of hashtags"
                  text="If you are on social media and haven’t heard of #hashtags then..."
                  author={yukta}
                  date="29 Aug, 2022"
                  title="Effective Use Of Hashtags"
                ></Blog>
                <Blog
                  imgName={blog7}
                  link="/blogs/all-you-need-to-know-about-business-blogging/"
                  text="Businesses are constantly looking for ways to improve their..."
                  alt="All you need to know about business blogging"
                  author={yukta}
                  date="25 Aug, 2022"
                  title="All you need to know about Business Blogging!"
                ></Blog>
                <Blog
                  imgName={blog6}
                  link="/blogs/content-marketing-how-it-can-help-your-business/"
                  text="Content marketing has become one of the most integral parts..."
                  alt="Content marketing and how it can help your business"
                  author={yukta}
                  date="19 Aug, 2022"
                  title="Overview: Content Marketing & How it can help your business?"
                ></Blog>
                <Blog
                  imgName={blog5}
                  link="/blogs/how-to-get-traffic-and-customers-online/"
                  alt="Basics of digital marketing"
                  text="Digital marketing is a crucial aspect of modern businesses..."
                  author={yukta}
                  date="12 Aug, 2022"
                  title="How to Get Traffic and Customers Online: The Basics of Digital Marketing"
                ></Blog>
                <Blog
                  imgName={blog4}
                  link="/blogs/5-ways-to-up-your-seo-game/"
                  alt="Ways to up your SEO game"
                  author={yukta}
                  date="7 Aug, 2022"
                  title="5 Ways To Up Your SEO Game!"
                  text="Search Engine Optimization (SEO) is the process of increasing a site's..."
                ></Blog>
                <Blog
                  imgName={blog3}
                  link="/blogs/3-golden-rules-of-ui-design/"
                  alt="3 Golden rules of UI design"
                  author={srishti}
                  date="6 Aug, 2022"
                  title="3 Golden Rules of UI Design"
                  text="Implementation of User Interface (UI) Design turns a basic interface..."
                ></Blog>
                <Blog
                  imgName={blog2}
                  link="/blogs/why-every-business-needs-a-webiste/"
                  alt="Why every business needs a website"
                  author={jason}
                  date="1 Aug, 2022"
                  title="Why Every Business Needs A Website?"
                  text="Websites are now an integral part of any business. They are tools for..."
                ></Blog>
                <Blog
                  imgName={blog1}
                  link="/blogs/how-can-the-saas-analytics-platform-helps-in-marketing-and-growth/"
                  alt="How can the saas analytics platform helps in marketing and growth"
                  author={srishti}
                  date="29 July, 2022"
                  title="How can the SaaS Analytics platform helps in Marketing and growth"
                  text="SaaS is an abbreviation for Software as a Service. It is a..."
                ></Blog>
                <FetchBlog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
