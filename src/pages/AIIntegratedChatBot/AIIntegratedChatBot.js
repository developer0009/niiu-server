import React, { Component } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import AIIntegratedChatBotBg from "./AIIntegratedChatBotBg";
import Experience from "./Experience";

import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import ThreePoints from "./ThreePoints";
import Reasons from "./Reasons";
import OurBlogSection from "../Home/OurBlogSection";

import JsonLd from "../Home/JsonLd";

import aiOG from "../../images/Opengraph/ai.jpg";

function AIIntegratedChatBot() {
	let aiIntegratedBread = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Ultimate AI Integrated Chat Bot",
				item: "https://niiu.digital/ai-integrated-chat-bot/",
			},
		],
	};
	return (
		<>
			<Helmet>
				<title>Ai Chatbot Services | Niiu Digital </title>
				<link
					rel="canonical"
					href="https://niiu.digital/ai-integrated-chat-bot/"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/ai-integrated-chat-bot/"
					hreflang="en-SG"
				/>
				<link
					rel="alternate"
					href="https://niiu.digital/ai-integrated-chat-bot/"
					hreflang="x-default"
				/>
				<meta
					name="description"
					content="With niiu digital artificial intelligence chat bot we asure 24/7 customer support for your business  "
				/>
				<meta
					name="keywords"
					content="ai chat bot for website, ai chatbot services, artificial intelligence chat bot, ai based chat bot, chatbots financial services, chatbot services, most intelligent ai chat bot, best online ai chat bot, ai conversational chatbot, best conversational ai chatbot, ai customer service chatbot"
				/>
				<meta
					property="og:title"
					content="Ai Chatbot Services | Niiu Digital"
				/>
				<meta
					property="og:url"
					content="https://niiu.digital/ai-integrated-chat-bot/"
				/>
				<meta
					property="og:description"
					content="With niiu digital artificial intelligence chat bot we asure 24/7 customer support for your business  "
				/>
				<meta property="og:image" content={aiOG} />
				<JsonLd data={aiIntegratedBread}></JsonLd>
			</Helmet>
			<Header></Header>
			<AIIntegratedChatBotBg></AIIntegratedChatBotBg>
			<Experience></Experience>
			<WhyChooseUs></WhyChooseUs>
			<Reasons></Reasons>
			<ThreePoints></ThreePoints>
			<OurBlogSection></OurBlogSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default AIIntegratedChatBot;
