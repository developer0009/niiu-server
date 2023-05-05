import React, { Component } from "react";

import Header from "../Home/Header";
import CircleProgressSection from "../Home/CirlceProgressSection";
import OurBlogSection from "../Home/OurBlogSection";
import SEOSection from "../Home/SEOSection";
import Footer from "../Home/Footer";
import UIUXDesignBgSection from "./UIUXDesignBg";
import WhyChooseUs from "./WhyChooseUs";
import FirstThreeSteps from "./FirstThreeSteps";

import { Helmet } from "react-helmet";
import FirstSection from "./FirstSection";
import PerksSection from "./PerksSection";

import Type1 from "./Type1";
import Type2 from "./Type2";
import Type3 from "./Type3";
import Type4 from "./Type4";
import Type5 from "./Type5";

import JsonLd from "../Home/JsonLd";

import uiOG from "../../images/Opengraph/ui.jpg";

function UIUXDesign() {
	let uiuxDesignBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Ui-Ux design services",
				item: "https://niiu.digital/ui-ux-design/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>
					Ui Ux Web Design Services Singapore | Niiu Digital
				</title>
				<link
					rel="canonical"
					href="https://niiu.digital/ui-ux-design/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/ui-ux-design/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/ui-ux-design/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Niiu digital offers ui ux web design services in singapore that helps solopreneurs website's more attractive and engaging"
				/>
				<meta
					name="keywords"
					content="ui and ux designs, ui ux web design services singapore, ui ux web design services, web ui design services, ui ux design services for solopreneurs, ui ux design sme, ui ux design for realstate"
				/>
				<meta
					property="og:title"
					content="Ui Ux Web Design Services Singapore | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/ui-ux-design/"
				/>
				<meta
					property="og:description"
					content="Niiu digital offers ui ux web design services in singapore that helps solopreneurs website's more attractive and engaging"
				/>
				<meta property="og:image" content={uiOG} />
				<JsonLd data={uiuxDesignBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<UIUXDesignBgSection></UIUXDesignBgSection>
			<FirstSection></FirstSection>
			<WhyChooseUs></WhyChooseUs>
			<PerksSection></PerksSection>
			<Type1></Type1>
			<Type2></Type2>
			<Type3></Type3>
			<Type4></Type4>
			<Type5></Type5>
			<FirstThreeSteps></FirstThreeSteps>
			<CircleProgressSection></CircleProgressSection>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default UIUXDesign;
