import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
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
								We Can Offer Best Freelance Writing Services
								With NiiU Digital Agency
							</h2>

							<p className="who-are-we-p">
								NIIU Digital Agency is one of the best freelance
								writing services provider in Singapore. We not
								just offer excellent writing services but also
								provide flexible working hours and great
								communication with our clients. Our team of
								experienced writers has a vast knowledge about
								various digital marketing topics, so they can
								help you to write content that speaks to your
								target audience.
							</p>
							<p>
								Our best practice is to make sure that you are
								including your target keyword in the page URL,
								Title Tag, Meta Description and H1. We want your
								content to get the most bang for its buck, we’ll
								make sure that we pay attention to the details
								that make up the meta data. These details will
								be clearly and accurately described, will
								contain keywords when and where applicable, and
								be compelling enough to draw readers in.
							</p>
							<p>
								We’ll help you facilitate clear communication
								within and between organizations, your peers,
								and your customers in order to produce desirable
								business results. This will include sales and
								marketing materials; training and educational
								content; communications like emails & memos; ad
								copies; proposals; marketing copies more.
							</p>
							<p>
								We’ll help you create and publish blog posts and
								every time you post a blog, it's one more
								indexed page on your website, which means one
								more opportunity for you to show up on the
								search engine results page (SERP) and drive
								traffic to your website in organic search.
							</p>
							<p>
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Contact us
								</Link>{" "}
								today to learn more about our amazing freelance
								writing services!
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
								alt="offered services for freelance writing"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
