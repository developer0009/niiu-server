import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import keywordResearchChooseImg from "../../images/kr/keyword-research-choose.webp";
import "../../css/ContentMarketing/WhyChooseUs.css";

function WhyChooseUs() {
	return (
		<>
			<div className="container-fluid">
				<div className="container content-marketing-section why-choose-us-section-website-development padding-y">
					<div
						className="row about-us-section website-dev-service-2-section"
						style={{ display: "flex", alignItems: "center" }}
					>
						<div
							className="who-are-we col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WHY CHOOSE US</h5>
							<h2>
								Why Choose NiiU Digital For Keyword Research
								Services ?
							</h2>

							<p className="who-are-we-p">
								Our keyword research process begins with keyword
								identification. Our SEO experts leverage their
								experience and our bespoke technologies to
								identify all possible keyword topics and sub
								topics that will be relevant and valuable for
								our clients. We are also use leading third party
								keyword research tools like Google Ads, Semrush,
								Search Console and various others.
							</p>
							<p>
								By targeting specific keywords on different
								pages on your website, search engines will
								understand your website’s focus and rank your
								business accordingly. It also makes it easy for
								the search engine to choose the most relevant
								pages of your site to serve in the SERP, which
								makes for a better user experience and higher
								chance of conversion.We adopt a comprehensive
								research approach to understanding the digital
								landscape of your industry, including a range of
								keyword research services.
							</p>
							<p>
								For more information about how we can boost your
								digital presence using keyword research
								services,{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Contact us
								</Link>{" "}
								today!
							</p>
						</div>
						<div
							className="col-lg-6 col-md-12 content-marketing-img who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={keywordResearchChooseImg}
								className="img img-fluid"
								alt="Choose niiu digital for keyword research"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
