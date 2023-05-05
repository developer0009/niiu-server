import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import IdeationAndDesigningBg from "./IdeationAndDesigningBg";
import Experience from "./Experience";
import OurBlogSection from "../Home/OurBlogSection";

import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import FivePoints from "./FivePoints";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";

import JsonLd from "../Home/JsonLd";

import idOG from "../../images/Opengraph/id.jpg";

function IdeationAndDesigning() {
	let ideationBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Ideation & Designing",
				item: "https://niiu.digital/ideation-and-designing/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Ideation and Design | Niiu Digital</title>
				<link
					rel="canonical"
					href="https://niiu.digital/ideation-and-designing/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/ideation-and-designing/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/ideation-and-designing/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="we offer best user experience design ideation to solopreneurs,sme,coaches,realtor and service base business who wants to conquer online marketing. "
				/>
				<meta
					name="keywords"
					content="ideation and design, service design ideation, design ideation, user experience design ideation"
				/>
				<meta
					property="og:title"
					content="Ideation and Design | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/ideation-and-designing/"
				/>
				<meta
					property="og:description"
					content="we offer best user experience design ideation to solopreneurs,sme,coaches,realtor and service base business who wants to conquer online marketing. "
				/>
				<meta property="og:image" content={idOG} />
				<JsonLd data={ideationBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<IdeationAndDesigningBg></IdeationAndDesigningBg>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<FivePoints></FivePoints>
			<Service1></Service1>
			<Service2></Service2>
			<Service3></Service3>
			<Service4></Service4>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default IdeationAndDesigning;
