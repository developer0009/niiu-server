import React, { Component } from "react";
import Footer from "../Home/Footer";

import SEOSection from "../Home/SEOSection";
import FAQSBgSection from "./FAQSBgSection";
import Questions from "./Questions";
import TicketSection from "./TicketSection";

import { Helmet } from "react-helmet";
import JsonLd from "../Home/JsonLd";
import Header from "../Home/Header";

import faqsOG from "../../images/Opengraph/faqs.jpg";

function FAQS() {
	let faqsBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Frequently Ask Questions",
				item: "https://niiu.digital/faqs/",
			},
		],
	};
	let faqsData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Do I really need a website?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "People incorrectly assume they can market and grow their business online using only social media channels. Think of the various social media channels as the wheels of your vehicle. They are important pieces of the vehicle but useless on their own. Your website is your vehicle. Every marketing channel and strategy should tie back to your website for one reason: You own your website and can control the path your visitors take.",
				},
			},
			{
				"@type": "Question",
				name: "How does a website increase sales?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Working on the following points will help you create a good website which will increase sales. Domain name, Logo, Design, Speed, Call to actions, Useful content (+blog and newsletter), Incentives - Reviews",
				},
			},
			{
				"@type": "Question",
				name: "How often should I update my web content?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Whether you have a blog, corporate website or ecommerce store, updating your website on a regular basis has many benefits. A website that is updated regularly is crawled more often, has more pages in the index and more possibilities to boost SEO.",
				},
			},
			{
				"@type": "Question",
				name: "Best SEO Practices for High Quality Content",
				acceptedAnswer: {
					"@type": "Answer",
					text: "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.",
				},
			},
			{
				"@type": "Question",
				name: "What is the main purpose of social media marketing?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "With over 37 billions active users of social media world-wide, this is a platform where you get massive audience of your business to connect with your customer increase brand awareness and generate more lead. Social media is becoming one of the most important aspects of digital marketing which provides Incredible benefit by reaching millions of customers.",
				},
			},
			{
				"@type": "Question",
				name: "What social media platforms are best for my business?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "When it comes to figuring out the best social media for your business, the first step is to prioritize what’s important to you. Is it expanding your reach? Is it generating more leads? Is it about brand awareness? From there, it’s about determining which platform will give you the right exposure with the right audience.",
				},
			},
			{
				"@type": "Question",
				name: "Why is SEO Link Building Important?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability.",
				},
			},
			{
				"@type": "Question",
				name: "How can I reach you guys?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "You can submit a ticket on our website with your personal information and our experts will connect with you!",
				},
			},
		],
	};

	return (
		<>
			<Helmet>
				<title>Frequently Ask Questions | Niiu Digital </title>
				<link rel="canonical" href="https://niiu.digital/faqs/" />

				<link
					rel="alternate"
					href="https://niiu.digital/faqs/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/faqs/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="Find the answers here for questions and concerns about digital services that might help your business grow."
				/>
				<meta name="keywords" content="" />
				<meta
					property="og:title"
					content="Frequently Ask Questions | Niiu Digital "
				/>
				<meta property="og:url" content="https://niiu.digital/faqs/" />
				<meta
					property="og:description"
					content="Find the answers here for questions and concerns about digital services that might help your business grow."
				/>
				<meta property="og:image" content={faqsOG} />
				<JsonLd data={faqsData}></JsonLd>
				<JsonLd data={faqsBread}></JsonLd>
				{/* <script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(faqsData),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(faqsBread),
					}}
				/> */}
			</Helmet>
			<Header></Header>
			<FAQSBgSection></FAQSBgSection>
			<Questions></Questions>
			<TicketSection></TicketSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default FAQS;
