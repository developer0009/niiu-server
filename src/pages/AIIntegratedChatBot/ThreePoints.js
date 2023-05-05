import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import { Link } from "react-router-dom";

function ThreePoints() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y simple-steps-section">
					<div className="row">
						<div
							className=" col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>THREE SIGNIFICANT BENEFITS</h5>
							<h2>
								Build AI Chatbot For Your Business Needs With
								NiiU Digital Agency !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Get More Leads</h3>
							<p>
								AI Chatbot services are a great way to get more
								leads. They allow you to create a custom chatbot
								that can easily and quickly connect with
								potential customers and gather the necessary
								information needed for lead generation. This
								allows you to focus on other tasks, such as
								sales or marketing, while your chatbot handles
								the lead capture process. If you're looking for
								a way to get more leads, then you need to look
								no further than our best online AI chatbot.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Get More Sales</h3>
							<p>
								There is no doubt that AI Chatbot services are
								having a major impact on the sales world. These
								chatbots can help you automate your customer
								service processes and provide better support to
								your customers. They can also help you detect
								and respond to customer queries more quickly,
								which will lead to increased sales
								opportunities. f you're looking for ways to
								boost your sales performance, then consider
								using AI Chatbot services as part of your
								overall strategy. We at NIIU Digital would be
								happy to help you get started.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Build Customer Relationships</h3>
							<p>
								Today, customer relationships are managed
								through emails and phone calls. But what if you
								could cut out the middleman altogether? What if
								you had a conversation with your customers
								directly? That's where AI conversation al
								services come in. Chatbots offer businesses the
								ability to have direct conversations with
								customers using artificial intelligence (AI).
								This technology allows you to understand your
								customer's needs and desires, and then provide
								them with the information they need in an
								easy-to-understand format.
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

export default ThreePoints;
