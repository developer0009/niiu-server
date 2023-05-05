import React, { Component } from "react";

import Header from "../Home/Header";
import SEOSection from "../Home/SEOSection";
import Footer from "../Home/Footer";
import TermsOfUseBg from "./TermsOfUseBg";
import ContentSection from "./ContentSection";

import { Helmet } from "react-helmet";

function TermsOfUse() {
	return (
		<>
			<Helmet>
				<title>Terms Of Use - NiiU Digital</title>
			</Helmet>
			<Header></Header>
			<TermsOfUseBg></TermsOfUseBg>
			<ContentSection></ContentSection>
			<SEOSection></SEOSection>
			<Footer></Footer>
		</>
	);
}

export default TermsOfUse;
