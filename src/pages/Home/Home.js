import React, { useState, useEffect } from "react";

// import PropagateLoader from "react-spinners/PropagateLoader";

import AboutUsSection from "./AboutUsSection";
import CircleProgressSection from "./CirlceProgressSection";
import Footer from "./Footer";
import Header from "./Header";
import OurBlogSection from "./OurBlogSection";
import SEOSection from "./SEOSection";
import SimpleSteps from "./SimpleSteps";
import TestimonialsSection from "./TestimonialsSection";
import WelcomeSection from "./WelcomeSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

import Helmet from "react-helmet";
import CEOVideo from "./CEOVideo";
import JsonLd from "./JsonLd";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import ThreePoints from "./ThreePoints";
import ThreeSteps from "./ThreeSteps";

import homeOG from "../../images/Opengraph/home.jpg";

function Home() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  // 	setLoading(true);
  // 	setTimeout(() => {
  // 		setLoading(false);
  // 	}, 800);
  // }, []);
  let data = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Niiu Digital",
    url: "https://niiu.digital/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://niiu.digital/{search_term_string}/",
      "query-input": "required name=search_term_string",
    },
  };

  let businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Niiu digital",
    image:
      "https://niiu.digital/static/media/niiu-digital-new-logo-2.f263fd45a5c51a94c3a8.png",
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
        <title>Digital Agency Singapore | Niiu Digital </title>
        <link rel="canonical" href="https://niiu.digital/" />
        <link rel="alternate" href="https://niiu.digital/" hreflang="en-SG" />

        <link
          rel="alternate"
          href="https://niiu.digital/"
          hreflang="x-default"
        />
        <meta
          name="description"
          content="We're one of the best digital marketing agency in singapore that provides digital services for solopreneurs,sme,and etc.Saving time while scaling your business!"
        />
        <meta
          name="keywords"
          content="digital agency singapore, digital agency best websites, best digital agency singapore, top marketing agencies singapore, best digital marketing agency singapore, best agency in singapore, best creative agency singapore"
        />
        <meta
          property="og:title"
          content="Digital Agency Singapore | Niiu Digital "
        />
        <meta property="og:url" content="https://niiu.digital/" />
        <meta
          property="og:description"
          content="We're one of the best digital marketing agency in singapore that provides digital services for solopreneurs,sme,and etc.Saving time while scaling your business!"
        />
        <meta property="og:image" content={homeOG} />

        <JsonLd data={data}></JsonLd>
        <JsonLd data={businessData}></JsonLd>
      </Helmet>
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <AboutUsSection></AboutUsSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <Service1></Service1>
      <Service2></Service2>
      <Service3></Service3>
      <Service4></Service4>
      <Service5></Service5>
      <SimpleSteps></SimpleSteps>
      <ThreePoints></ThreePoints>
      <ThreeSteps></ThreeSteps>
      <CEOVideo></CEOVideo>
      <TestimonialsSection></TestimonialsSection>
      <CircleProgressSection></CircleProgressSection>
      <OurBlogSection></OurBlogSection>
      <SEOSection></SEOSection>
      <Footer></Footer>
      {/* {loading ? (
				<PropagateLoader
					color="#2b0a78"
					loading={loading}
					// cssOverride={override}
					style={{
						margin: "0",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
					size={15}
				/>
			) : (
				<>
					<Header></Header>
					<WelcomeSection></WelcomeSection>
					<AboutUsSection></AboutUsSection>
					<SimpleSteps></SimpleSteps>
					<WhyChooseUsSection></WhyChooseUsSection>
					<TestimonialsSection></TestimonialsSection>
					<CircleProgressSection></CircleProgressSection>
					<OurBlogSection></OurBlogSection>
					<SEOSection></SEOSection>
					<Footer></Footer>
				</>
			)} */}
    </>
  );
}

export default Home;
