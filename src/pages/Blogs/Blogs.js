import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import BlogsBg from "./BlogsBg";

import { Helmet } from "react-helmet";
import AllBlogs from "./AllBlogs";

function Blogs() {
	return (
		<>
			<Helmet>
				<title>Blogs | NiiU Digital</title>
				<meta name="robots" content="noindex,follow" />
				<link href="https://niiu.digital/blogs/" />
			</Helmet>
			<Header></Header>
			<BlogsBg></BlogsBg>
			<AllBlogs></AllBlogs>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default Blogs;
