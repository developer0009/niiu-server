import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import arrowIcon from "../../images/arrow.png";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import contentMarketingWhyChooseUsImg from "../../images/content-marketing/content-marketing-why-choose.webp";
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
								How NiiU Digital Helps Content Marketing For
								Your Business ?
							</h2>

							<p className="who-are-we-p">
								Our writers include your suggestions, industry
								best practices for search engines, and their own
								search engine optimization skills. As a best
								content marketing services, we make sure that
								every blog post on your website is written to
								appeal to the interests of your intended
								audience. Our goal is to produce informative
								material that is both search engine and human
								reader friendly.
							</p>
							<p>
								We ensure all blog posts on your site are
								crafted to capture the attention of your
								targeted audience.
							</p>
							<p>
								Our online content marketing services will help
								you to connect prospective audiences round the
								globe and increase your sales through
							</p>
							<p>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 1"
								></img>
								&nbsp;A Defined Target Audience. <br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 2"
								></img>
								&nbsp;Clear and Measurable Goals.
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 3"
								></img>
								&nbsp;Relevant Buyer Personas. <br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 4"
								></img>
								&nbsp;Diverse Range of Content.
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 5"
								></img>
								&nbsp;The Perfect Content Marketing Platform.{" "}
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 6"
								></img>
								&nbsp;A Robust Distribution and Promotion
								Strategy. <br></br>
							</p>
							<p>
								We have a team of experts who are experienced in
								creating engaging and effective content
								strategies that meet the needs of your target
								audience. Please don't hesitate to{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									contact us
								</Link>{" "}
								if you would like more information or want to
								schedule a consultation!
							</p>
						</div>
						<div
							className="col-lg-6 col-md-12 content-marketing-img who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={contentMarketingWhyChooseUsImg}
								className="img img-fluid"
								alt="helpful content service"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
