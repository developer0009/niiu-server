import React, { Component } from "react";
import CircleProgressSection from "../Home/CirlceProgressSection";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import OurBlogSection from "../Home/OurBlogSection";
import SEOSection from "../Home/SEOSection";
import OurProcess from "./OurProcess";
import RealNumbers from "./RealNumbers";
import SearchEngineOptimizationBgSection from "./SearchEngineOptimizationBgSection";
import SEOKing from "./SEOKing";

import { Helmet } from "react-helmet";
import PerksSection from "./PerksSection";
import Service1 from "./Service1";

import JsonLd from "../Home/JsonLd";

import seoOG from "../../images/Opengraph/seo.jpg";

function SearchEngineOptimization() {
	let searchEngineBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Search Engine Optimization Services",
				item: "https://niiu.digital/search-engine-optimization/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Singapore Seo Agency | Niiu Digital </title>
				<link
					rel="canonical"
					href="https://niiu.digital/search-engine-optimization/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/search-engine-optimization/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/search-engine-optimization/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Niiu digital agency is the best seo services in singapore that helps service base business and solopreneurs boost their organic traffic. "
				/>
				<meta
					name="keywords"
					content="local seo singapore, local seo in singapore, seo packages singapore, singapore seo agency , best seo agency in singapore, seo singapore services , best seo services in singapore, seo for coaches, seo for business coaches, seo for financial advisors"
				/>
				<meta
					property="og:title"
					content="Singapore Seo Agency | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/search-engine-optimization/"
				/>
				<meta
					property="og:description"
					content="Niiu digital agency is the best seo services in singapore that helps service base business and solopreneurs boost their organic traffic. "
				/>
				<meta property="og:image" content={seoOG} />
				<JsonLd data={searchEngineBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<SearchEngineOptimizationBgSection></SearchEngineOptimizationBgSection>
			<SEOKing></SEOKing>
			<RealNumbers></RealNumbers>
			<PerksSection></PerksSection>
			<Service1></Service1>
			<OurProcess></OurProcess>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default SearchEngineOptimization;
