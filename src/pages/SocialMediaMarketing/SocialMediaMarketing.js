import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import OurBlogSection from "../Home/OurBlogSection";
import SEOSection from "../Home/SEOSection";
import Experience from "./Experience";
import SocialMediaMarketingBg from "./SocialMediaMarketingBg";
import FirstThreeSteps from "./FirstThreeSteps";
import WhyChooseUs from "./WhyChooseUs";

import { Helmet } from "react-helmet";
import Type1 from "./Type1";
import Type2 from "./Type2";
import Type3 from "./Type3";
import Service1 from "./Service1";

import JsonLd from "../Home/JsonLd";
import ThreePoints from "./ThreePoints";

import smmOG from "../../images/Opengraph/smm.jpg";

function SocialMediaMarketing() {
	let socialMediaMarketingBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Social Media Marketing Services",
				item: "https://niiu.digital/social-media-marketing/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>
					Social Media Marketing in Singapore | Niiu Digital
				</title>
				<link
					rel="canonical"
					href="https://niiu.digital/social-media-marketing/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/social-media-marketing/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/social-media-marketing/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Our social media and content specialist will help your business in terms of creating, promoting content, and engaging target audience to ensure higher conversions."
				/>
				<meta
					name="keywords"
					content="social media marketing singapore, social media marketing in singapore, social media and content specialist, social media content specialist, content and social media specialist, social media marketing for smes, social media marketing for sme, why use social media for marketing, sme social media marketing, social media benefits for small business, social media marketing for coaches"
				/>
				<meta
					property="og:title"
					content="Social Media Marketing in Singapore | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/social-media-marketing/"
				/>
				<meta
					property="og:description"
					content="Our social media and content specialist will help your business in terms of creating, promoting content, and engaging target audience to ensure higher conversions."
				/>
				<meta property="og:image" content={smmOG} />
				<JsonLd data={socialMediaMarketingBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<SocialMediaMarketingBg></SocialMediaMarketingBg>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<ThreePoints></ThreePoints>
			<Type1></Type1>
			<Type2></Type2>
			<Type3></Type3>
			<Service1></Service1>
			<FirstThreeSteps></FirstThreeSteps>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default SocialMediaMarketing;
