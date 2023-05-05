import React from "react";
import client from "../utils";
// import { useState, useEffect } from "react";
import Blog from "../pages/Blogs/Blog";
import { useContext } from "react";
import { BlogContext } from "../context_api";
const FetchBlog = () => {
  const posts = useContext(BlogContext);
  return (
    <>
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
    </>
  );
};

export default FetchBlog;
