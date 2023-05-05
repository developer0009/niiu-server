import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import TestimonialsSection from "../Home/TestimonialsSection";
import MeetOurTeamBgSection from "./MeetOurTeamBgSection";
import SkilledTeam from "./SkilledTeam";
import ProfessionalPeople from "./ProfessionalPeople";

import { Helmet } from "react-helmet";
import CEOVideo from "../Home/CEOVideo";

import JsonLd from "../Home/JsonLd";

import meetourteamOG from "../../images/Opengraph/meet-our-team.jpg";

function MeetOurTeam() {
	let meetourteamBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Meet our team",
				item: "https://niiu.digital/meet-our-team/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Meet Our Digital Team | Niiu Digital </title>
				<link
					rel="canonical"
					href="https://niiu.digital/meet-our-team/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/meet-our-team/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/meet-our-team/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Our digital leaders will help your business attracts clients online with our offered digital marketing services. "
				/>
				<meta name="keywords" content="" />
				<meta
					property="og:title"
					content="Meet Our Digital Team | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/meet-our-team/"
				/>
				<meta
					property="og:description"
					content="Our digital leaders will help your business attracts clients online with our offered digital marketing services. "
				/>
				<meta property="og:image" content={meetourteamOG} />
				<JsonLd data={meetourteamBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<MeetOurTeamBgSection></MeetOurTeamBgSection>
			<SkilledTeam></SkilledTeam>
			<ProfessionalPeople></ProfessionalPeople>
			<CEOVideo></CEOVideo>
			<TestimonialsSection></TestimonialsSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default MeetOurTeam;
