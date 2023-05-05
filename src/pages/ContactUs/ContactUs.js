import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import ContactDetails from "./ContactDetails";
import ContactUsBg from "./ContactUsBg";
import Map from "./Map";

import { Helmet } from "react-helmet";

import JsonLd from "../Home/JsonLd";

import contactOG from "../../images/Opengraph/contact.jpg";

function ContactUs() {
	let businessData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Niiu digital",
		image: "https://niiu.digital/static/media/niiu-digital-new-logo-2.f263fd45a5c51a94c3a8.png",
		"@id": "",
		url: "https://niiu.digital/",
		telephone: "+65 68292281",
		priceRange: "$$$",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Level 42, Suntec Tower Three, 8 Temasek Boulevard",
			addressLocality: "singapore",
			postalCode: "038988",
			addressCountry: "SG",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 1.2953148,
			longitude: 103.8594994,
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "10:00",
			closes: "18:00",
		},
		sameAs: [
			"https://www.facebook.com/niiudigital",
			"https://www.instagram.com/niiu_digital/",
			"https://www.linkedin.com/company/niiudigital/",
			"https://www.youtube.com/channel/UCIkk1LrvkByxMd4yANM1Hsg",
		],
	};
	return (
		<>
			<Helmet>
				<title>Contact us now for Inquiries | NiiU Digital</title>
				<link rel="canonical" href="https://niiu.digital/contact-us/" />
				<link
					rel="alternate"
					href="https://niiu.digital/contact-us/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/contact-us/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="You can easily book a call with our team at your convenience. Please click our Contact us form  to schedule a Quick Check-In Call with our Digital team."
				/>
				<meta name="keywords" content="" />
				<meta
					property="og:title"
					content="Contact us now for Inquiries | NiiU Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/contact-us/"
				/>
				<meta
					property="og:description"
					content="You can easily book a call with our team at your convenience. Please click our Contact us form  to schedule a Quick Check-In Call with our Digital team."
				/>
				<meta property="og:image" content={contactOG} />
				<JsonLd data={businessData}></JsonLd>
			</Helmet>
			<Header></Header>
			<ContactUsBg></ContactUsBg>
			<ContactDetails></ContactDetails>
			<Map></Map>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default ContactUs;
