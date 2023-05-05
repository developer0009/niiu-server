import React, { Component } from "react";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import Footer from "../Home/Footer";
import CareersBg from "./CareersBg";
import { Helmet } from "react-helmet";
import OurProcess from "./OurProcess";
import AvailableJobSection from "./AvailableJobSection";

import careersOG from "../../images/Opengraph/careers.jpg";

function Careers() {
	return (
		<>
			<Helmet>
				<title>Apply job with us | NiiU Digital</title>
				<link rel="canonical" href="https://niiu.digital/careers/" />
				<link
					rel="alternate"
					href="https://niiu.digital/careers/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/careers/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="We accept applicants with great experience. Check our career page to learn more about the roles that might suit your skills."
				/>
				<meta name="keywords" content="" />
				<meta
					property="og:title"
					content="Apply job with us | NiiU Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/careers/"
				/>
				<meta
					property="og:description"
					content="We accept applicants with great experience. Check our career page to learn more about the roles that might suit your skills."
				/>
				<meta property="og:image" content={careersOG} />
			</Helmet>
			<Header></Header>
			<CareersBg></CareersBg>
			<OurProcess></OurProcess>
			<AvailableJobSection></AvailableJobSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default Careers;
