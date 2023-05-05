import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/OurBlogSection.css";
import "../../css/Home/SimpleSteps.css";

import { useContext } from "react";
import { BlogContext } from "../../context_api";

import blog111 from "../../images/blogs/blog111.webp";
import blog104 from "../../images/blogs/blog104.webp";
import blog105 from "../../images/blogs/blog105.webp";

import "../../css/our-button.css";
import Blog from "../Blogs/Blog";
import FetchBlog from "../../sanity/FetchBlog";
import SanityOurBlog from "../../sanity/SanityOurBlog";

const srishti = "Shrishti Shukla";
const jason = "Jason Wong";
const yukta = "Yukta Mutreja";
const elizabeth = "Elizabeth Assey";
function OurBlogSection() {
  const data = useContext(BlogContext);
  console.log(data);
  return (
    <>
      <div className="container-fluid">
        <div
          className="container our-blog-section padding-y"
          style={{ textAlign: "center" }}
        >
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h5
                style={{
                  fontWeight: "bolder",
                  opacity: "0.5",
                }}
              >
                WEEKLY BLOGS
              </h5>
              <h2>Our Latest Media</h2>
            </div>
          </div>
          <div className="row all-blogs-section spacing-top-bottom">
            <div className="col-lg-12">
              {!data || data.length === 0 ? (
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
                </div>
              ) : data.length > 2 ? (
                <SanityOurBlog />
              ) : (
                <div className="wrapper">
                  {data.length === 1 ? (
                    <>
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
                        imgName={blog111}
                        author={elizabeth}
                        date="16 Jan, 2023"
                        title="Reasons you Should Consider using TikTok..."
                        text="With over 2 billion active users, TikTok is without..."
                        link="/blogs/reasons-tiktok-marketing/"
                        alt="Reasons you Should Consider using TikTok for Marketing"
                      ></Blog>
                      <FetchBlog />
                    </>
                  ) : (
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

                      <FetchBlog />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="row all-blogs-btn">
            <div className="col-lg-12">
              <div data-aos="zoom-in" data-aos-duration="1000">
                <Link to="/blogs/">
                  <button className="our-button blog-side">
                    <span>All Blogs</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurBlogSection;
