import React, { Component } from "react";

import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import Footer from "../Home/Footer";
import PrivacyPolicyBg from "./PrivacyPolicyBg";
import ContentSection from "./ContentSection";

import { Helmet } from "react-helmet";

function PrivacyPolicy() {
	return (
		<>
			<Helmet>
				<title>Privacy Policy - NiiU Digital</title>
			</Helmet>
			<Header></Header>
			<PrivacyPolicyBg></PrivacyPolicyBg>
			<ContentSection></ContentSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default PrivacyPolicy;
