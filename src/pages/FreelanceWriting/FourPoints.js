import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import { Link } from "react-router-dom";

function FourPoints() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y simple-steps-section">
					<div className="row">
						<div
							className="col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>FOUR SIGNIFICANT BENEFITS</h5>
							<h2>
								Advantage Of Having An Effective Website
								Copywriting For Your Business !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<p>
								Website copywriting is one of the most important
								aspects of website design. Without clear and
								well-written content, your website will not be
								able to compete with the top performers in the
								market.
							</p>
							<p>
								There are a few benefits to having an effective
								website copywriter on your team:{" "}
							</p>
							<h4>1. Increased Traffic</h4>
							<p>
								People tend to visit websites that look
								professional and are easy to navigate.
								Well-written content will help increase traffic
								to your site, which can lead to higher sales
								figures and Increased visibility for your brand.
								Copywriters use various methods to target the
								right readers, including keyword research and
								focus groups. They also understand the different
								SEO techniques available today, such as link
								building and social media marketing campaigns.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>2. Higher Conversion Rates</h4>
							<p style={{ marginBottom: "5px" }}>
								When visitors arrive on your site, they should
								be able to understand what you offer right away.
								Clear and concise text helps break down complex
								concepts into easily understood language, which
								results in high conversion rates (when visitors
								take action such as signing up for a newsletter
								or making a purchase).
							</p>
							<p>
								Good website copywriting can help you convert
								more visitors into customers, reduce customer
								cancellations and refunds, and boost sales
								growth.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>3. Better SEO Rankings</h4>
							<p style={{ marginBottom: "5px" }}>
								Copywriting can make a big difference when it
								comes to SEO Rankings for your business. By
								writing effective content that addresses the
								needs and interests of your target audience, you
								can help your website rank higher in search
								engine results pages (SERPs).
							</p>
							<p>
								The better quality the content on your site, the
								more likely it is that search engine spiders
								will index it correctly. This ensures that
								people searching for related information (such
								as product information or customer reviews)will
								find yours first.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>4. More Engaged Customers</h4>
							<p>
								Good website content creates an emotional
								connection with customers. They feel like they
								know you and that you are knowledgeable about
								their needs. This engagement leads to loyalty
								and repeat business. Copywriters use a variety
								of strategies to write compelling content that
								will capture readers' attention and encourage
								them to take action. They might focus on
								creating persuasive headlines or crafting
								persuasive body paragraphs that are relevant and
								interesting to the reader.
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button contact-side">
										<span>Contact Us</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FourPoints;
