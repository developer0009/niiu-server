import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import FreelanceWritingBg from "./FreelanceWritingBg";
import Experience from "./Experience";
import OurBlogSection from "../Home/OurBlogSection";

import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";

import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import FourPoints from "./FourPoints";

import JsonLd from "../Home/JsonLd";

import fwOG from "../../images/Opengraph/fw.jpg";

function FreelanceWriting() {
	let freelanceWritingBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Freelance Writing",
				item: "https://niiu.digital/freelance-writing/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Freelance Writing Services | Niiu Digital </title>
				<link
					rel="canonical"
					href="https://niiu.digital/freelance-writing/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/freelance-writing/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/freelance-writing/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="We offer freelance writing services that provide high quality content for solopreneurs,coaches,and service base business."
				/>
				<meta
					name="keywords"
					content="freelance writing services, freelance writing services online, offer freelance writing services, freelance copywriting, freelance web copywriting"
				/>
				<meta
					property="og:title"
					content="Freelance Writing Services | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/freelance-writing/"
				/>
				<meta
					property="og:description"
					content="We offer freelance writing services that provide high quality content for solopreneurs,coaches,and service base business."
				/>
				<meta property="og:image" content={fwOG} />
				<JsonLd data={freelanceWritingBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<FreelanceWritingBg></FreelanceWritingBg>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<FourPoints></FourPoints>
			<Service1></Service1>
			<Service2></Service2>
			<Service3></Service3>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default FreelanceWriting;
