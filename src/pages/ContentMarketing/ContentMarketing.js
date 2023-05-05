import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import BarsSection from "./BarsSection";
import ContentMarketingBgSection from "./ContentMarketingBgSection";
import OurWorkingProcess from "./OurWorkingProcess";
import WhyChooseUs from "./WhyChooseUs";
import OurBlogSection from "../Home/OurBlogSection";
import SEOSection from "../Home/SEOSection";

import { Helmet } from "react-helmet";
import Experience from "./Experience";
import Type1 from "./Type1";
import PerksSection from "./PerksSection";
import Type2 from "./Type2";
import Type3 from "./Type3";
import Type4 from "./Type4";
import Type5 from "./Type5";
import Type6 from "./Type6";
import Type7 from "./Type7";
import JsonLd from "../Home/JsonLd";

import cmOG from "../../images/Opengraph/cm.jpg";

function ContentMarketing() {
	let contentMarketingBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "content marketing services",
				item: "https://niiu.digital/content-marketing/",
			},
		],
	};

	return (
		<>
			<Helmet>
				<title>Content Marketing in Singapore | Niiu Digital</title>
				<link
					rel="canonical"
					href="https://niiu.digital/content-marketing/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/content-marketing/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/content-marketing/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="We provide quality marketing strategy content that engages and inspires the audience for solopreneurs,sme,coaches and service base businesses. "
				/>
				<meta
					name="keywords"
					content="content marketing in singapore, content marketing singapore, singapore content marketing, marketing strategy content, content marketing services agency, online content marketing services, best content marketing services, content marketing for coaches, how content marketing helps business"
				/>
				<meta
					property="og:title"
					content="Content Marketing in Singapore | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/content-marketing/"
				/>
				<meta
					property="og:description"
					content="We provide quality marketing strategy content that engages and inspires the audience for solopreneurs,sme,coaches and service base businesses. "
				/>
				<meta property="og:image" content={cmOG} />
				<JsonLd data={contentMarketingBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<ContentMarketingBgSection></ContentMarketingBgSection>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<PerksSection></PerksSection>
			<Type1></Type1>
			<Type2></Type2>
			<Type3></Type3>
			<Type4></Type4>
			<Type5></Type5>
			<Type6></Type6>
			<Type7></Type7>

			<OurWorkingProcess></OurWorkingProcess>
			<BarsSection></BarsSection>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default ContentMarketing;
