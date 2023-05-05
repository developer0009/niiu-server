import React from "react";

import Footer from "../Home/Footer";
import Header from "../Home/Header";
import AboutUs from "./AboutUs";
import WhoAreWeBgSection from "./WhoAreWeBgSection";
import CEOVideo from "../Home/CEOVideo";
import SEOSection from "../Home/SEOSection";

import { Helmet } from "react-helmet";

import JsonLd from "../Home/JsonLd";
import WhyChooseUs from "./WhyChooseUs";
import ThreePoints from "./ThreePoints";

import whoareweOG from "../../images/Opengraph/who-are-we.jpg";

function WhoAreWe() {
	let whoareweBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Who are we",
				item: "https://niiu.digital/who-are-we/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Who Are Niiu Digital Leaders | Niiu Digital </title>
				<link rel="canonical" href="https://niiu.digital/who-are-we/" />
				<link
					rel="alternate"
					href="https://niiu.digital/who-are-we/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/who-are-we/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Niiu digital Agency is committed to help solopreneurs and service base business build and grow their businesses online."
				/>
				<meta name="keywords" content="" />
				<meta
					property="og:title"
					content="Who Are Niiu Digital Leaders | Niiu Digital "
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/who-are-we/"
				/>
				<meta
					property="og:description"
					content="Niiu digital Agency is committed to help solopreneurs and service base business build and grow their businesses online."
				/>
				<meta property="og:image" content={whoareweOG} />
				<JsonLd data={whoareweBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<WhoAreWeBgSection></WhoAreWeBgSection>
			<AboutUs></AboutUs>
			<WhyChooseUs></WhyChooseUs>
			<ThreePoints></ThreePoints>
			<CEOVideo></CEOVideo>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default WhoAreWe;
