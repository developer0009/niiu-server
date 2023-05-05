import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import BusinessManagementSoftwareBg from "./BusinessManagementSoftwareBg";
import { Helmet } from "react-helmet";
import Experience from "./Experience";
import OurBlogSection from "../Home/OurBlogSection";
import FivePoints from "./FivePoints";
import WhyChooseUs from "./WhyChooseUs";
import Reasons from "./Reasons";

import JsonLd from "../Home/JsonLd";

import bmOG from "../../images/Opengraph/bm.jpg";

function BusinessManagementSoftware() {
	let businessManagementBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Business Management Software",
				item: "https://niiu.digital/business-management-software/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>
					Business Management Software Services | Niiu Digital
				</title>
				<link
					rel="canonical"
					href="https://niiu.digital/business-management-software/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/business-management-software/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/business-management-software/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="We will provide your business management software tools to insure we take care our services provided. "
				/>
				<meta
					name="keywords"
					content="business management software, business management software small business, business management software tools, business management software for small business, business management software website, business management software services, best software for small business management"
				/>
				<meta
					property="og:title"
					content="Business Management Software Services | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/business-management-software/"
				/>
				<meta
					property="og:description"
					content="We will provide your business management software tools to insure we take care our services provided. "
				/>
				<meta property="og:image" content={bmOG} />
				<JsonLd data={businessManagementBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<BusinessManagementSoftwareBg></BusinessManagementSoftwareBg>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<Reasons></Reasons>
			<FivePoints></FivePoints>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default BusinessManagementSoftware;
