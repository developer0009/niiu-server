import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import OurBlogSection from "../Home/OurBlogSection";
import SEOSection from "../Home/SEOSection";
import Experience from "./Experience";
import FirstThreeSteps from "./FirstThreeSteps";
import OurPromise from "./OurPromise";

import WebsiteDevelopmentBgSection from "./WebsiteDevelopmentBgSection";
import WhyChooseUs from "./WhyChooseUs";

import { Helmet } from "react-helmet";
import PerksSection from "./PerksSection";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Technologies from "./Technologies";
import JsonLd from "../Home/JsonLd";

import wdOG from "../../images/Opengraph/wd.jpg";

function WebsiteDevelopment() {
	let websiteDevelopmentBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Website design and development services",
				item: "https://niiu.digital/website-development/",
			},
		],
	};

	return (
		<>
			<Helmet>
				<title>
					Web Development Services in Singapore | Niiu Digital
				</title>
				<link
					rel="canonical"
					href="https://niiu.digital/website-development/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/website-development/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/website-development/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Niiu digital is the home of expert web developer singapore who specialize in the design and development of custom websites for coaches,realtor,sme and etc."
				/>
				<meta
					name="keywords"
					content="web developer singapore, web development services in singapore, website for solopreneurs, websites for solopreneurs, best website development services , website development assistance, website development service provider, website development benefits, web developer in singapore"
				/>
				<meta
					property="og:title"
					content="Web Development Services in Singapore | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/website-development/"
				/>
				<meta
					property="og:description"
					content="Niiu digital is the home of expert web developer singapore who specialize in the design and development of custom websites for coaches,realtor,sme and etc."
				/>
				<meta property="og:image" content={wdOG} />
				<JsonLd data={websiteDevelopmentBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<WebsiteDevelopmentBgSection></WebsiteDevelopmentBgSection>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<PerksSection></PerksSection>
			<Service1></Service1>
			<Service2></Service2>
			<Service3></Service3>
			<Service4></Service4>
			<Service5></Service5>
			<Technologies></Technologies>
			<FirstThreeSteps></FirstThreeSteps>

			<OurPromise></OurPromise>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default WebsiteDevelopment;
