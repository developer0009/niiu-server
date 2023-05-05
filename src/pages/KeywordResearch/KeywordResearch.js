import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import KeywordResearchBg from "./KeywordResearchBg";
import Experience from "./Experience";
import OurBlogSection from "../Home/OurBlogSection";

import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import SixPoints from "./SixPoints";

import JsonLd from "../Home/JsonLd";

import krOG from "../../images/Opengraph/kr.jpg";

function KeywordResearch() {
	let keywordResearchBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Keyword Research",
				item: "https://niiu.digital/keyword-research/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Keyword Research Services | Niiu Digital </title>
				<link
					rel="canonical"
					href="https://niiu.digital/keyword-research/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/keyword-research/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/keyword-research/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Niiu digital Agency practices proper keyword research for better ranking of your website so we can offer best keyword research strategy for your business"
				/>
				<meta
					name="keywords"
					content="seo keyword research services, seo keyword research , keywords for search engine optimisation, proper keyword research, keyword research on google, keyword research seo, keyword research strategy, keyword research services"
				/>
				<meta
					property="og:title"
					content="Keyword Research Services | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/keyword-research/"
				/>
				<meta
					property="og:description"
					content="Niiu digital Agency practices proper keyword research for better ranking of your website so we can offer best keyword research strategy for your business"
				/>
				<meta property="og:image" content={krOG} />
				<JsonLd data={keywordResearchBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<KeywordResearchBg></KeywordResearchBg>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<SixPoints></SixPoints>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default KeywordResearch;
