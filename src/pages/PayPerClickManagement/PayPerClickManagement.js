import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import PayPerClickManagementBg from "./PayPerClickManagementBg";
import Experience from "./Experience";
import OurBlogSection from "../Home/OurBlogSection";

import { Helmet } from "react-helmet";
import HowWorks from "./HowWorks";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import FourPoints from "./FourPoints";

import JsonLd from "../Home/JsonLd";

import ppcmOG from "../../images/Opengraph/ppcm.jpg";

function PayPerClickManagement() {
	let payBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Pay Per Click Management",
				item: "https://niiu.digital/pay-per-click-management/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Ppc Marketing Services | Niiu Digital </title>
				<link
					rel="canonical"
					href="https://niiu.digital/pay-per-click-management/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/pay-per-click-management/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/pay-per-click-management/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Niiu digital provides best pay per click services that will give your business website's best results with transparency."
				/>
				<meta
					name="keywords"
					content="pay per click services, best pay per click services, ppc marketing, ppc marketing services"
				/>
				<meta
					property="og:title"
					content="Ppc Marketing Services | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/pay-per-click-management/"
				/>
				<meta
					property="og:description"
					content="Niiu digital provides best pay per click services that will give your business website's best results with transparency."
				/>
				<meta property="og:image" content={ppcmOG} />
				<JsonLd data={payBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<PayPerClickManagementBg></PayPerClickManagementBg>
			<Experience></Experience>
			<HowWorks></HowWorks>
			<FourPoints></FourPoints>
			<Service1></Service1>
			<Service2></Service2>
			<Service3></Service3>
			<Service4></Service4>
			<Service5></Service5>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default PayPerClickManagement;
