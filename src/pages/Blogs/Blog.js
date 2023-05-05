import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../../css/Blogs/Blog.css";

const Blog = (props) => {
  return (
    <>
      <Link to={props.link} style={{ textDecoration: "none" }} className="blog">
        <div className="blog-content">
          <div className="blog-img">
            <img
              src={props.imgName}
              className="img img-fluid"
              style={{ width: "100%", height: "292px", objectFit: "cover" }}
              alt={props.alt}
            ></img>
          </div>
          <div className="blog-texts">
            <div className="blog-details">
              <p className="link">
                <i className="fas fa-user me-1"></i>
                {props.author}
              </p>{" "}
              <p className="link">
                <i className="fas fa-calendar me-1"></i>
                {props.date}
              </p>
            </div>
            <h5 className="blog-title">{props.title}</h5>
            <p>{props.text}</p>
            <p
              className="link mb-0 fw-bold"
              style={{ textDecoration: "underline" }}
            >
              Read more
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Blog;
