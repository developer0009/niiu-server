import React from "react";
import client from "../utils";
// import { useState, useEffect } from "react";
import Blog from "../pages/Blogs/Blog";
import { useContext } from "react";
import { BlogContext } from "../context_api";
const SanityOurBlog = () => {
  const posts = useContext(BlogContext);
  return (
    <div className="wrapper">
      {posts.map((data, index) => (
        <Blog
          key={index}
          imgName={data.mainImage.asset.url}
          author={data.author}
          title={data.title}
          text={data.carddesc}
          date={data.publishedAt}
          link={`/blogs/${data.slug.current}`}
          alt={data.mainalt}
        />
      ))}
    </div>
  );
};

export default SanityOurBlog;
